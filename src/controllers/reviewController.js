import * as services from "../services/"
import {internalServer, badRequest} from '../middlewares/handle_error'



export const createNewReview = async (req, res) => {
    try {
        let data = await services.createNewReview(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewReview:", error);
        return internalServer(res);
    }
}
export const getAllReviewByProductId = async (req, res) => {
    try {

        let data = await services.getAllReviewByProductId(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllReviewByProductId:", error);
        return internalServer(res);
    }
}
export const ReplyReview = async (req, res) => {
    try {

        let data = await services.ReplyReview(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in ReplyReview:", error);
        return internalServer(res);
    }
}
export const deleteReview = async (req, res) => {
    try {

        let data = await services.deleteReview(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteReview:", error);
        return internalServer(res);
    }
}
export const createNewComment = async (req, res) => {
    try {
        let data = await services.createNewComment(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in createNewComment:", error);
        return internalServer(res);
    }
}
export const getAllCommentByBlogId = async (req, res) => {
    try {

        let data = await services.getAllCommentByBlogId(req.query.id);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in getAllCommentByBlogId:", error);
        return internalServer(res);
    }
}
export const ReplyComment = async (req, res) => {
    try {

        let data = await services.ReplyComment(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in ReplyComment:", error);
        return internalServer(res);
    }
}
export const deleteComment = async (req, res) => {
    try {

        let data = await services.deleteComment(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.error("Error in deleteComment:", error);
        return internalServer(res);
    }
}