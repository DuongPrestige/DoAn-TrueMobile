import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


export const createNewReceipt = async (req, res) => {
    try {
        let data = await services.createNewReceipt(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewReceipt:", error);
        return internalServer(res);
    }
}
export const getDetailReceiptById = async (req, res) => {
    try {
        let data = await services.getDetailReceiptById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailReceiptById:", error);
        return internalServer(res);
    }
}
export const getAllReceipt = async (req, res) => {
    try {
        let data = await services.getAllReceipt(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllReceipt:", error);
        return internalServer(res);
    }
}
export const updateReceipt = async (req, res) => {
    try {
        let data = await services.updateReceipt(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateReceipt:", error);
        return internalServer(res);
    }
}
export const deleteReceipt = async (req, res) => {
    try {
        let data = await services.deleteReceipt(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteReceipt:", error);
        return internalServer(res);
    }
}
export const createNewReceiptDetail = async (req, res) => {
    try {
        let data = await services.createNewReceiptDetail(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewReceiptDetail:", error);
        return internalServer(res);
    }
}