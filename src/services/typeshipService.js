import db from '../models';
const { Op } = require("sequelize");

export const createNewTypeShip = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.type || !data.price) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.TypeShip.create({
                    type: data.type,
                    price: data.price
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create new type ship successfully !'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const getDetailTypeshipById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.TypeShip.findOne({
                    where: { id: id },
                })
                resolve({
                    errCode: 0,
                    data: res
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const getAllTypeship = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let objectFilter = {
                order: [['price', 'DESC']],
            }
            if (data.limit && data.offset) {
                objectFilter.limit = +data.limit
                objectFilter.offset = +data.offset
            }
            if(data.keyword !=='') objectFilter.where = {...objectFilter.where, type: {[Op.substring]: data.keyword  } }
            let res = await db.TypeShip.findAndCountAll(objectFilter)

            resolve({
                errCode: 0,
                count: res.count,
                data: res.rows
                
            })



        } catch (error) {
            reject(error)
        }
    })
}
export const updateTypeship = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.type || !data.price) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let typeship = await db.TypeShip.findOne({
                    where: { id: data.id },
                    raw: false
                })
                if (typeship) {
                    typeship.type = data.type;
                    typeship.price = data.price;
                    await typeship.save()
                    resolve({
                        errCode: 0,
                        errMessage: 'Update type ship successfully !'
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}
export const deleteTypeship = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let typeship = await db.TypeShip.findOne({
                    where: { id: data.id }
                })
                if (typeship) {
                    await db.TypeShip.destroy({
                        where: { id: data.id }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'Delete type ship successfully !'
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}