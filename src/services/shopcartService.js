import db from '../models'
const { Op } = require("sequelize");

export const addShopCart = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.userId || !data.productdetailconfigId || !data.quantity) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            }
             else {
                let cart = await db.ShopCart.findOne({ where: { userId: data.userId, productdetailconfigId: data.productdetailconfigId, statusId: 0 }, raw: false })
                
                //neu da co san pham trong gio hang
                if (cart) {
                    let res = await db.ProductDetailConfig.findOne({ where: { id: data.productdetailconfigId } })
                    if (res) {
                        let receiptDetail = await db.ReceiptDetail.findAll({ where: { productdetailconfigId: res.id } })
                        let orderDetail = await db.OrderDetail.findAll({ where: { productId: res.id } })
                        let quantity = 0
                        for (let j = 0; j < receiptDetail.length; j++) {
                            quantity = quantity + receiptDetail[j].quantity
                        }
                        for (let k = 0; k < orderDetail.length; k++) {
                            let order = await db.OrderProduct.findOne({ where: { id: orderDetail[k].orderId } })
                            if (order.statusId != 'S7') {

                                quantity = quantity - orderDetail[k].quantity
                            }
                        }
                        res.stock = quantity
                    }
                    if (data.type === "UPDATE_QUANTITY") {

                        if (+data.quantity > res.stock) {
                            resolve({
                                errCode: 2,
                                errMessage: `Chỉ còn ${res.stock} sản phẩm`,
                                quantity: res.stock
                            })
                        } else {
                            cart.quantity = +data.quantity
                            await cart.save()
                        }
                    } else {

                        if ((+cart.quantity + (+data.quantity)) > res.stock) {
                            resolve({
                                errCode: 2,
                                errMessage: `Chỉ còn ${res.stock} sản phẩm`,
                                quantity: res.stock
                            })
                        } else {
                            cart.quantity = +cart.quantity + (+data.quantity)
                            await cart.save()
                        }
                    }

                }
                //neu chua co san pham trong gio hang
                else {
                    let res = await db.ProductDetailConfig.findOne({ where: { id: data.productdetailconfigId } })
                    if (res) {
                        let receiptDetail = await db.ReceiptDetail.findAll({ where: { productdetailconfigId: res.id } })
                        let orderDetail = await db.OrderDetail.findAll({ where: { productId: res.id } })
                        let quantity = 0
                        for (let j = 0; j < receiptDetail.length; j++) {
                            quantity = quantity + receiptDetail[j].quantity
                        }
                        for (let k = 0; k < orderDetail.length; k++) {
                            let order = await db.OrderProduct.findOne({ where: { id: orderDetail[k].orderId } })
                            if (order.statusId != 'S7') {

                                quantity = quantity - orderDetail[k].quantity
                            }
                        }
                        res.stock = quantity
                    }

                    if (data.quantity > res.stock) {
                        resolve({
                            errCode: 2,
                            errMessage: `Chỉ còn ${res.stock} sản phẩm`,
                            quantity: res.stock
                        })
                    } else {
                        await db.ShopCart.create({
                            userId: data.userId,
                            productdetailconfigId: data.productdetailconfigId,
                            quantity: data.quantity,
                            statusId: 0
                        })
                    }

                }
                resolve({
                    errCode: 0,
                    errMessage: 'add to cart success !'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const getAllShopCartByUserId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.ShopCart.findAll({
                    where: { userId: id, statusId: 0 }
                })
                for (let i = 0; i < res.length; i++) {
                    res[i].productdetailconfigData = await db.ProductDetailConfig.findOne({
                        where: { id: res[i].productdetailconfigId },
                        include: [
                            { model: db.Allcode, as: 'colorData', attributes: ['value', 'code'] },
                            { model: db.Allcode, as: 'romData', attributes: ['value', 'code'] },

                        ],
                        raw: true,
                        nest: true
                    })
                    res[i].productDetail = await db.ProductDetail.findOne({ where: { id: res[i].productdetailconfigData.productdetailId } })
                    res[i].productDetailImage = await db.ProductImage.findAll({ where: { productdetailId: res[i].productDetail.id } })
                    if (res[i].productDetailImage && res[i].productDetailImage.length > 0) {
                        for (let j = 0; j < res[i].productDetailImage.length; j++) {
                            res[i].productDetailImage[j].image = new Buffer(res[i].productDetailImage[j].image, 'base64').toString('binary');
                        }
                    }
                    res[i].productData = await db.Product.findOne({ where: { id: res[i].productDetail.productId } })
                }
                if (res) {
                    resolve({
                        errCode: 0,
                        data: res
                    })
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const deleteItemShopCart = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.ShopCart.findOne({ where: { id: data.id, statusId: 0 } })
                if (!res) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Shop cart not found !'
                    })
                }
                {
                    await db.ShopCart.destroy({
                        where: { id: data.id }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'Delete item success !'
                    })
                }
            }
        } catch (error) {
            reject(error)
        }
    })
}