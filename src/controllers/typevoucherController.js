import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


//==========================TYPEVOUCHER=====================//


export const createNewTypeVoucher = async (req, res) => {
    try {
        let data = await services.createNewTypeVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewTypeVoucher:", error);
        return internalServer(res);
    }
}
export const getDetailTypeVoucherById = async (req, res) => {
    try {
        let data = await services.getDetailTypeVoucherById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailTypeVoucherById:", error);
        return internalServer(res);
    }
}
export const getAllTypeVoucher = async (req, res) => {
    try {
        let data = await services.getAllTypeVoucher(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllTypeVoucher:", error);
        return internalServer(res);
    }
}
export const updateTypeVoucher = async (req, res) => {
    try {
        let data = await services.updateTypeVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateTypeVoucher:", error);
        return internalServer(res);
    }
}
export const deleteTypeVoucher = async (req, res) => {
    try {
        let data = await services.deleteTypeVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteTypeVoucher:", error);
        return internalServer(res);
    }
}
export const getSelectTypeVoucher = async (req, res) => {
    try {
        let data = await services.getSelectTypeVoucher();
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getSelectTypeVoucher:", error);
        return internalServer(res);
    }
}
//==========================VOUCHER=====================//
export const createNewVoucher = async (req, res) => {
    try {
        let data = await services.createNewVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewVoucher:", error);
        return internalServer(res);
    }
}
export const getDetailVoucherById = async (req, res) => {
    try {
        let data = await services.getDetailVoucherById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailVoucherById:", error);
        return internalServer(res);
    }
}
export const getAllVoucher = async (req, res) => {
    try {
        let data = await services.getAllVoucher(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllVoucher:", error);
        return internalServer(res);
    }
}

export const updateVoucher = async (req, res) => {
    try {
        let data = await services.updateVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateVoucher:", error);
        return internalServer(res);
    }
}
export const deleteVoucher = async (req, res) => {
    try {
        let data = await services.deleteVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteVoucher:", error);
        return internalServer(res);
    }
}
export const saveUserVoucher = async (req, res) => {
    try {
        let data = await services.saveUserVoucher(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in saveUserVoucher:", error);
        return internalServer(res);
    }
}
export const getAllVoucherByUserId = async (req, res) => {
    try {
        let data = await services.getAllVoucherByUserId(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllVoucherByUserId:", error);
        return internalServer(res);
    }
}

