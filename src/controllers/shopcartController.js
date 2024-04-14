import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


export const addShopCart = async (req, res) => {
    try {
        let data = await services.addShopCart(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in addShopCart:", error);
        return internalServer(res);
    }
}
export const getAllShopCartByUserId = async (req, res) => {
    try {
        let data = await services.getAllShopCartByUserId(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllShopCartByUserId:", error);
        return internalServer(res);
    }
}
export const deleteItemShopCart = async (req, res) => {
    try {
        let data = await services.deleteItemShopCart(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteItemShopCart:", error);
        return internalServer(res);
    }
}