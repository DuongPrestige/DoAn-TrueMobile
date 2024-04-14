import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'





export const  createNewOrder = async (req, res) => {
    try {
        let data = await services.createNewOrder(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewOrder:", error);
        return internalServer(res);
    }
}
export const  getAllOrders = async (req, res) => {
    try {
        let data = await services.getAllOrders(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllOrders:", error);
        return internalServer(res);
    }
}
export const  getDetailOrderById = async (req, res) => {
    try {
        let data = await services.getDetailOrderById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailOrderById:", error);
        return internalServer(res);
    }
}
export const  updateStatusOrder = async (req, res) => {
    try {
        let data = await services.updateStatusOrder(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateStatusOrder:", error);
        return internalServer(res);
    }
}
export const  getAllOrdersByUser = async (req, res) => {
    try {
        let data = await services.getAllOrdersByUser(req.query.userId);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllOrdersByUser:", error);
        return internalServer(res);
    }
}
export const  paymentOrder = async (req, res) => {
    try {
        let data = await services.paymentOrder(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in paymentOrder:", error);
        return internalServer(res);
    }
}
export const  paymentOrderSuccess = async (req, res) => {
    try {
        let data = await services.paymentOrderSuccess(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in paymentOrderSuccess:", error);
        return internalServer(res);
    }
}
export const  paymentOrderVnpaySuccess = async (req, res) => {
    try {
        let data = await services.paymentOrderVnpaySuccess(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in paymentOrderVnpaySuccess:", error);
        return internalServer(res);
    }
}
export const  confirmOrder = async (req, res) => {
    try {
        let data = await services.confirmOrder(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in confirmOrder:", error);
        return internalServer(res);
    }
}
export const  getAllOrdersByShipper = async (req, res) => {
    try {
        let data = await services.getAllOrdersByShipper(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllOrdersByShipper:", error);
        return internalServer(res);
    }
}
export const  paymentOrderVnpay = async (req, res) => {
    try {
        let data = await services.paymentOrderVnpay(req);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in paymentOrderVnpay:", error);
        return internalServer(res);
    }
}
export const  confirmOrderVnpay = async (req, res) => {
    try {
        let data = await services.confirmOrderVnpay(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in confirmOrderVnpay:", error);
        return internalServer(res);
    }
}
export const  updateImageOrder = async (req, res) => {
    try {
        let data = await services.updateImageOrder(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateImageOrder:", error);
        return internalServer(res);
    }
}