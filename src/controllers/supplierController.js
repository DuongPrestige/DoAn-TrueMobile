import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'



export const createNewSupplier = async (req, res) => {
    try {
        let data = await services.createNewSupplier(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewSupplier:", error);
        return internalServer(res);
    }
}
export const getDetailSupplierById = async (req, res) => {
    try {
        let data = await services.getDetailSupplierById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailSupplierById:", error);
        return internalServer(res);
    }
}
export const getAllSupplier = async (req, res) => {
    try {
        let data = await services.getAllSupplier(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllSupplier:", error);
        return internalServer(res);
    }
}
export const updateSupplier = async (req, res) => {
    try {
        let data = await services.updateSupplier(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateSupplier:", error);
        return internalServer(res);
    }
}
export const deleteSupplier = async (req, res) => {
    try {
        let data = await services.deleteSupplier(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteSupplier:", error);
        return internalServer(res);
    }
}