import * as services from "../services/";
import { internalServer, badRequest } from "../middlewares/handle_error";

export const getCountCardStatistic = async (req, res) => {
  try {
    let data = await services.getCountCardStatistic(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getCountCardStatistic:", error);
    return internalServer(res);
  }
};
export const getCountStatusOrder = async (req, res) => {
  try {
    let data = await services.getCountStatusOrder(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getCountStatusOrder:", error);
    return internalServer(res);
  }
};
export const getStatisticByMonth = async (req, res) => {
  try {
    let data = await services.getStatisticByMonth(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStatisticByMonth:", error);
    return internalServer(res);
  }
};
export const getStatisticByDay = async (req, res) => {
  try {
    let data = await services.getStatisticByDay(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStatisticByDay:", error);
    return internalServer(res);
  }
};
export const getStatisticOverturn = async (req, res) => {
  try {
    let data = await services.getStatisticOverturn(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStatisticOverturn:", error);
    return internalServer(res);
  }
};
export const getStatisticProfit = async (req, res) => {
  try {
    let data = await services.getStatisticProfit(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStatisticProfit:", error);
    return internalServer(res);
  }
};
export const getStatisticStockProduct = async (req, res) => {
  try {
    let data = await services.getStatisticStockProduct(req.query);
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in getStatisticStockProduct:", error);
    return internalServer(res);
  }
};
