import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


    

export const createNewTypeShip = async (req, res) => {
    try {
        let data = await services.createNewTypeShip(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewTypeShip:", error);
        return internalServer(res);
    }
}
export const getDetailTypeshipById = async (req, res) => {
    try {
        let data = await services.getDetailTypeshipById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailTypeshipById:", error);
        return internalServer(res);
    }
}
export const getAllTypeship = async (req, res) => {
    try {
        let data = await services.getAllTypeship(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllTypeship:", error);
        return internalServer(res);
    }
}
export const updateTypeship = async (req, res) => {
    try {
        let data = await services.updateTypeship(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateTypeship:", error);
        return internalServer(res);
    }
}
export const deleteTypeship = async (req, res) => {
    try {
        let data = await services.deleteTypeship(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteTypeship:", error);
        return internalServer(res);
    }
}