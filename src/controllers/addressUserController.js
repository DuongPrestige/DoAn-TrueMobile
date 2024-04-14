import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


export const createNewAddressUser = async (req, res) => {
    try {
        let data = await services.createNewAddressUser(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewAddressUser:", error);
        return internalServer(res);
    }
}
export const getAllAddressUserByUserId = async (req, res) => {
    try {
        let data = await services.getAllAddressUserByUserId(req.query.userId);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllAddressUserByUserId:", error);
        return internalServer(res);
    }
}
export const deleteAddressUser = async (req, res) => {
    try {
        let data = await services.deleteAddressUser(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteAddressUser:", error);
        return internalServer(res);
    }
}
export const editAddressUser = async (req, res) => {
    try {
        let data = await services.editAddressUser(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in editAddressUser:", error);
        return internalServer(res);
    }
}
export const getDetailAddressUserById = async (req, res) => {
    try {
        let data = await services.getDetailAddressUserById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailAddressUserById:", error);
        return internalServer(res);
    }
}