import * as services from "../services/";
import { internalServer, badRequest } from "../middlewares/handle_error";

export const createNewProduct = async (req, res) => {
  try {
    console.log("controller data: ", data);

    let data = await services.createNewProduct(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in createNewProduct:", error);
    return internalServer(res);
  }
};

export const getAllProductUser = async (req, res) => {
  try {
    let data = await services.getAllProductUser(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllProductUser:", error);
    return internalServer(res);
  }
};

export const updateProduct = async (req, res) => {
  try {
    let data = await services.updateProduct(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in updateProduct:", error);
    return internalServer(res);
  }
};

export const getAllProductAdmin = async (req, res) => {
  try {
    let data = await services.getAllProductAdmin(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in updateProduct:", error);
    return internalServer(res);
  }
};

export const UnactiveProduct = async (req, res) => {
  try {
    let data = await services.UnactiveProduct(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in UnactiveProduct:", error);
    return internalServer(res);
  }
};

export const ActiveProduct = async (req, res) => {
  try {
    let data = await services.ActiveProduct(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in ActiveProduct:", error);
    return internalServer(res);
  }
};

export const createNewProductDetail = async (req, res) => {
  try {
    let data = await services.createNewProductDetail(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in ActiveProduct:", error);
    return internalServer(res);
  }
};

export const updateProductDetail = async (req, res) => {
  try {
    let data = await services.updateProductDetail(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in updateProductDetail:", error);
    return internalServer(res);
  }
};

export const getDetailProductDetailById = async (req, res) => {
  try {
    let data = await services.getDetailProductDetailById(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getDetailProductDetailById:", error);
    return internalServer(res);
  }
};

export const createNewProductDetailImage = async (req, res) => {
  try {
    let data = await services.createNewProductDetailImage(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in createNewProductDetailImage:", error);
    return internalServer(res);
  }
};

export const getDetailProductImageById = async (req, res) => {
  try {
    let data = await services.getDetailProductImageById(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getDetailProductImageById:", error);
    return internalServer(res);
  }
};

export const updateProductDetailImage = async (req, res) => {
  try {
    let data = await services.updateProductDetailImage(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in updateProductDetailImage:", error);
    return internalServer(res);
  }
};

export const deleteProductDetailImage = async (req, res) => {
  try {
    let data = await services.deleteProductDetailImage(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in deleteProductDetailImage:", error);
    return internalServer(res);
  }
};

export const deleteProductDetail = async (req, res) => {
  try {
    let data = await services.deleteProductDetail(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in deleteProductDetail:", error);
    return internalServer(res);
  }
};

export const getAllProductDetailConfigById = async (req, res) => {
  try {
    let data = await services.getAllProductDetailConfigById(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllProductDetailConfigById:", error);
    return internalServer(res);
  }
};

export const createNewProductDetailConfig = async (req, res) => {
  try {
    let data = await services.createNewProductDetailConfig(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in createNewProductDetailConfig:", error);
    return internalServer(res);
  }
};

export const getDetailProductDetailConfigById = async (req, res) => {
  try {
    let data = await services.getDetailProductDetailConfigById(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getDetailProductDetailConfigById:", error);
    return internalServer(res);
  }
};

export const updateProductDetailConfig = async (req, res) => {
  try {
    let data = await services.updateProductDetailConfig(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in updateProductDetailConfig:", error);
    return internalServer(res);
  }
};

export const deleteProductDetailConfig = async (req, res) => {
  try {
    let data = await services.deleteProductDetailConfig(req.body);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in deleteProductDetailConfig:", error);
    return internalServer(res);
  }
};

export const getProductFeature = async (req, res) => {
  try {
    let data = await services.getProductFeature(req.query.limit);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getProductFeature:", error);
    return internalServer(res);
  }
};

export const getProductNew = async (req, res) => {
  try {
    let data = await services.getProductNew(req.query.limit);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getProductNew:", error);
    return internalServer(res);
  }
};

export const getProductShopCart = async (req, res) => {
  try {
    let data = await services.getProductShopCart(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getProductShopCart:", error);
    return internalServer(res);
  }
};

//them moi
export const getAllProductDetailById = async (req, res) => {
  try {
    let data = await services.getAllProductDetailById(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllProductDetailById:", error);
    return internalServer(res);
  }
};

//them moi
export const getDetailProductById = async (req, res) => {
  try {
    let data = await services.getDetailProductById(req.query.id);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getDetailProductById:", error);
    return internalServer(res);
  }
};

//them moi
export const getAllProductDetailImageById = async (req, res) => {
  try {
    let data = await services.getAllProductDetailImageById(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getAllProductDetailImageById:", error);
    return internalServer(res);
  }
};
