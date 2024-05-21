import db from '../models';
const { Op } = require("sequelize");

export const createNewRoom = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.userId1) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters !'
                })
            } else {
                console.log('helooo')
                let userAdmin = await db.User.findOne({
                    where: { email: 'chat@gmail.com' },
                    raw: true,
                    nest: true
                })
                let room = await db.RoomMessage.findOne({
                    where: { userOne: data.userId1 },
                    raw: true,
                    nest: true
                })
                if (room) {
                    resolve({
                        errCode: 2,
                        errMessage: 'Da Co Phong'
                    })
                } else {
                    if (userAdmin) {
                        let res = await db.RoomMessage.create({
                            userOne: data.userId1,
                            userTwo: userAdmin.id
                        })
                        if (res) {
                            resolve({
                                errCode: 0,
                                errMessage: 'Create new room successfully !'
                            })
                        }
                    }
                }


            }
        } catch (error) {
            reject(error)
        }
    })
}


export const sendMessage = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.userId || !data.roomId || !data.text) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters !'
                })
            } else {
                let res = await db.Message.create({
                    text: data.text,
                    userId: data.userId,
                    roomId: data.roomId,
                    unRead: true
                })
                if (res) {
                    resolve({
                        errCode: 0,
                        errMessage: 'send message successfully !'
                    })
                }

            }
        } catch (error) {
            reject(error)
        }
    })
}
export const loadMessage = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.roomId) {
                resolve({
                    errCode: -1,
                    errMessage: 'Missing required parameters !'
                })
            } else {

                await db.Message.update({
                    unRead: false
                },
                    {
                        where:
                        {
                            roomId: data.roomId,
                            userId: { [Op.not]: data.userId }
                        }
                    }
                )
                let message = await db.Message.findAll({
                    where: { roomId: data.roomId },
                    raw: true,
                    nest: true
                })

                for (let i = 0; i < message.length; i++) {
                    message[i].userData = await db.User.findOne({
                        where: { id: message[i].userId },
                        raw: true,
                        nest: true
                    })
                    if (message[i].userData.image) {
                        message[i].userData.image = new Buffer(message[i].userData.image, 'base64').toString('binary');
                    }
                }
                resolve({
                    errCode: 0,
                    data: message
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const listRoomOfUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!userId) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters !'
                })
            } else {
                let room = await db.RoomMessage.findAll({
                    where: { userOne: userId },
                    raw: true,
                    nest: true
                })

                for (let i = 0; i < room.length; i++) {
                    room[i].messageData = await db.Message.findAll({
                        where: { roomId: room[i].id },
                        raw: true,
                        nest: true
                    })

                    room[i].userOneData = await db.User.findOne({
                        where: { id: room[i].userOne },
                        raw: true,
                        nest: true
                    })
                    if (room[i].userOneData.image) {
                        room[i].userOneData.image = new Buffer(room[i].userOneData.image, 'base64').toString('binary');
                    }
                    room[i].userTwoData = await db.User.findOne({
                        where: { id: room[i].userTwo },
                        raw: true,
                        nest: true
                    })
                    if (room[i].userTwoData.image) {
                        room[i].userTwoData.image = new Buffer(room[i].userTwoData.image, 'base64').toString('binary');
                    }
                }
                resolve({
                    errCode: 0,
                    data: room
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
export const listRoomOfAdmin = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let user = await db.User.findOne({ where: { email: 'chat@gmail.com' } })
            if (user) {
                let room = await db.RoomMessage.findAll({
                    where: { userTwo: user.id },
                    raw: true,
                    nest: true
                })

                console.log("room: ", room)
                for (let i = 0; i < room.length; i++) {
                    room[i].messageData = await db.Message.findAll({
                        where: { roomId: room[i].id },
                        raw: true,
                        nest: true
                    })
                    room[i].userOneData = await db.User.findOne({
                        where: { id: room[i].userOne },
                        raw: true,
                        nest: true
                    })
                    if (room[i].userOneData.image) {
                        room[i].userOneData.image = new Buffer(room[i].userOneData.image, 'base64').toString('binary');
                    }
                    room[i].userTwoData = await db.User.findOne({
                        where: { id: room[i].userTwo },
                        raw: true,
                        nest: true
                    })
                    if (room[i].userTwoData.image) {
                        room[i].userTwoData.image = new Buffer(room[i].userTwoData.image, 'base64').toString('binary');
                    }
                }
                resolve({
                    errCode: 0,
                    data: room
                })
            }


        } catch (error) {
            reject(error)
        }
    })
}