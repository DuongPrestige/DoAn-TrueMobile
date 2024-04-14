import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


export const createNewBanner = async (req, res) => {
    try {
        let data = await services.createNewBanner(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewBanner:", error);
        return internalServer(res);
    }
}

export const getDetailBanner = async (req, res) => {
    try {
        let data = await services.getDetailBanner(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailBanner:", error);
        return internalServer(res);
    }
}

export const getAllBanner = async (req, res) => {
    try {
        let data = await services.getAllBanner(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllBanner:", error);
        return internalServer(res);
    }
}


export const updateBanner = async (req, res) => {
    try {
        let data = await services.updateBanner(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in updateBanner:", error);
        return internalServer(res);
    }
}

export const deleteBanner = async (req, res) => {
    try {
        let data = await services.deleteBanner(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteBanner:", error);
        return internalServer(res);
    }
}