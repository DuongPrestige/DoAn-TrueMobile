import * as controllers from "../controllers";
import { verifyToken } from "../middlewares/verify_token";
import express from "express";
import { isAdmin, isSaler } from "../middlewares/verify_role";

const router = express.Router();

//=====================API TYPEVOUCHER==========================//

//PUBLIC ROUTES

//PRIVATE ROUTES
router.use(verifyToken);

router.use(isAdmin);

router.get("/get-count-card-statistic", controllers.getCountCardStatistic);
router.get("/get-count-status-order", controllers.getCountStatusOrder);
router.get("/get-statistic-by-month", controllers.getStatisticByMonth);
router.get("/get-statistic-by-day", controllers.getStatisticByDay);
router.get("/get-statistic-overturn", controllers.getStatisticOverturn);
router.get("/get-statistic-profit", controllers.getStatisticProfit);
router.get(
  "/get-statistic-stock-product",
  controllers.getStatisticStockProduct
);

module.exports = router;
