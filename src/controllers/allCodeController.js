import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'
import { userSchema } from '../helpers/join_schema';


export const handleCreateNewAllCode = async (req, res) => {
    try {
        let data = await services.handleCreateNewAllCode(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in CreateNewAllCode:", error);
        return internalServer(res);
    }
}

export const handleUpdateAllCode = async (req, res) => {getAllCategoryBlog
    try {
        let data = await services.handleUpdateAllCode(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in handleUpdateAllCode:", error);
        return internalServer(res);
    }
}

export const handleDeleteAllCode = async (req, res) => {
    try {
        let data = await services.handleDeleteAllCode(req.body.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in handleDeleteAllCode:", error);
        return internalServer(res);
    }
}

export const getAllCodeService = async (req, res) => {
    try {
        let data = await services.getAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllCodeService:", error);
        return internalServer(res);
    }
}

//phan trang
export const getListAllCodeService = async (req, res) => {
    try {
        const data = await services.getListAllCodeService(req.query);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getListAllCodeService:", error);
        return internalServer(res);
    }
}

export const getDetailAllCodeById = async (req, res) => {
    try {
        let data = await services.getDetailAllCodeById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getDetailAllCodeById:", error);
        return internalServer(res);
    }
}

export const getAllCategoryBlog = async (req, res) => {
    try {
        let data = await services.getAllCategoryBlog(req.query.type);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error)
        console.error("Error in getAllCategoryBlog:", error);
        return internalServer(res);
    }
}