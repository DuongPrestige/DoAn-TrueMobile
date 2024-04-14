import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'



export const createNewRoom = async (req, res) => {
    try {
        let data = await services.createNewRoom(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewRoom:", error);
        return internalServer(res);
    }
}
export const sendMessage = async (req, res) => {
    try {
        let data = await services.sendMessage(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in sendMessage:", error);
        return internalServer(res);
    }
}
export const loadMessage = async (req, res) => {
    try {
        let data = await services.loadMessage(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in loadMessage:", error);
        return internalServer(res);
    }
}
export const listRoomOfUser = async (req, res) => {
    try {
        let data = await services.listRoomOfUser(req.query.userId);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in listRoomOfUser:", error);
        return internalServer(res);
    }
}
export const listRoomOfAdmin = async (req, res) => {
    try {
        let data = await services.listRoomOfAdmin();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in listRoomOfAdmin:", error);
        return internalServer(res);
    }
}