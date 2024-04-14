import db from '../models'
const { Op } = require("sequelize");


export const createNewReview = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.content || !data.productId || !data.userId || !data.star) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.Comment.create({
                    content: data.content,
                    productId: data.productId,
                    userId: data.userId,
                    star: data.star,
                    image: data.image
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Create review successfully !'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllReviewByProductId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.Comment.findAll({
                    where: {
                        productId: id,
                        //bo sung them dieu kien lay ra nhung review cha
                        parentId: null,
                    },
                    raw: true
                })

                if (res && res.length > 0) {

                    for (let i = 0; i < res.length; i++) {
                        // res[i].image = res[i].image ? new Buffer(res[i].image, 'base64').toString('binary') : ''

                        res[i].childComment = await db.Comment.findAll({ where: { parentId: res[i].id } })

                        res[i].user = await db.User.findOne(
                            {
                                where: { id: res[i].userId },
                                attributes: {
                                    exclude: ['password']
                                },
                            })
                        // res[i].user.image = new Buffer(res[i].user.image, 'base64').toString('binary')
                    }
                }

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

export const ReplyReview = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.content || !data.productId || !data.userId || !data.parentId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.Comment.create({
                    content: data.content,
                    productId: data.productId,
                    userId: data.userId,
                    parentId: data.parentId
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Reply review successfully !'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const deleteReview = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let review = await db.Comment.findOne({
                    where: { id: data.id }
                })
                if (!review) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Review not found !'
                    })
                }
                else{
                    await db.Comment.destroy({
                        where: { id: data.id }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'Delete review successfully !'
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}

export const createNewComment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.content || !data.blogId || !data.userId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.Comment.create({
                    content: data.content,
                    blogId: data.blogId,
                    userId: data.userId,
                    image: data.image
                })
                resolve({
                    errCode: 0,
                    errMessage: 'create comment successfully !'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const getAllCommentByBlogId = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let res = await db.Comment.findAll({
                    where: {
                        blogId: id,
                        parentId: null
                    },
                    order: [['createdAt', 'DESC']],
                    raw: true
                })

                if (res && res.length > 0) {

                    for (let i = 0; i < res.length; i++) {
                        res[i].image = res[i].image ? new Buffer(res[i].image, 'base64').toString('binary') : ''

                        res[i].childComment = await db.Comment.findAll({ where: { parentId: res[i].id } })
                        res[i].user = await db.User.findOne(
                            {
                                where: { id: res[i].userId },
                                attributes: {
                                    exclude: ['password']
                                },
                            })
                        res[i].user.image = new Buffer(res[i].user.image, 'base64').toString('binary')
                    }
                }

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

export const ReplyComment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.content || !data.blogId || !data.userId || !data.parentId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                await db.Comment.create({
                    content: data.content,
                    blogId: data.blogId,
                    userId: data.userId,
                    parentId: data.parentId
                })
                resolve({
                    errCode: 0,
                    errMessage: 'reply comment successfully !'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}

export const deleteComment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter !'
                })
            } else {
                let comment = await db.Comment.findOne({
                    where: { id: data.id }
                })
                if (comment) {
                    await db.Comment.destroy({
                        where: { id: data.id }
                    })
                    resolve({
                        errCode: 0,
                        errMessage: 'delete comment successfully !'
                    })
                }
            }

        } catch (error) {
            reject(error)
        }
    })
}