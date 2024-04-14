import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'


export const createNewBlog = async (req, res) => {
    try {
        let data = await services.createNewBlog(req.body);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in createNewBlog:", error);
        return internalServer(res);
    }
}
export const getDetailBlogById = async (req, res) => {
    try {
        let data = await services.getDetailBlogById(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in getDetailBlogById:", error);
        return internalServer(res);
    }
}
export const getAllBlog = async (req, res) => {
    try {
        let data = await services.getAllBlog(req.query);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in getAllBlog:", error);
        return internalServer(res);
    }
}
export const updateBlog = async (req, res) => {
    try {
        let data = await services.updateBlog(req.body);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in updateBlog:", error);
        return internalServer(res);
    }
}
export const deleteBlog = async (req, res) => {
    try {
        let data = await services.deleteBlog(req.body);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in deleteBlog:", error);
        return internalServer(res);
    }
}
export const getFeatureBlog = async (req, res) => {
    try {
        let data = await services.getFeatureBlog(req.query);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in getFeatureBlog:", error);
        return internalServer(res);
    }
}
export const getNewBlog = async (req, res) => {
    try {
        let data = await services.getNewBlog(req.query);
        return res.status(200).json(data);
    } catch (error) {
         console.error("Error in getNewBlog:", error);
        return internalServer(res);
    }
}