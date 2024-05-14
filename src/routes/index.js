import userRoute from "./userRoute";
import allCodeRoute from "./allCodeRoute";
import productRoute from "./productRoute";
import bannerRoute from "./bannerRoute";
import blogRoute from "./blogRoute";
import typeshipRoute from "./typeshipRoute";
import typevoucherRoute from "./typevoucherRoute";
import voucherRoute from "./voucherRoute";
import reviewRoute from "./reviewRoute";
import shopcartRoute from "./shopcartRoute";
import receiptRoute from "./receiptRoute";
import addressUserRoute from "./addressUserRoute";
import messageRoute from "./messageRoute";

import supplierRoute from "./supplierRoute";
import orderRoute from "./orderRoute";
import statisticRoute from "./statisticRoute";

import { internalServer, notFound } from "../middlewares/handle_error";

const initRoute = (app) => {
  //=====================API USER==========================//
  app.use("/api/v1/user", userRoute);

  //===================API ALLCODE========================//
  app.use("/api/v1/all-code", allCodeRoute);

  //===================API PRODUCT========================//
  app.use("/api/v1/product", productRoute);

  //===================API BANNER========================//
  app.use("/api/v1/banner", bannerRoute);

  //===================API BLOG========================//
  app.use("/api/v1/blog", blogRoute);

  //===================API TYPESHIP========================//
  app.use("/api/v1/typeship", typeshipRoute);

  //===================API TYPEVOUCHER========================//
  app.use("/api/v1/typevoucher", typevoucherRoute);

  //===================API VOUCHER========================//
  app.use("/api/v1/voucher", voucherRoute);

  //===================API REVIEW========================//
  app.use("/api/v1/review", reviewRoute);

  //===================API SHOPCART========================//
  app.use("/api/v1/shopcart", shopcartRoute);

  //===================API SUPPLIER========================//
  app.use("/api/v1/supplier", supplierRoute);

  //===================API RECEIPT========================//
  app.use("/api/v1/receipt", receiptRoute);

  //===================API ADDRESS USER========================//
  app.use("/api/v1/addressuser", addressUserRoute);

  //===================API MESSAGE========================//
  app.use("/api/v1/message", messageRoute);

  //===================API MESSAGE========================//
  app.use("/api/v1/order", orderRoute);

  //===================API statistic========================//
  app.use("/api", statisticRoute);

  app.use(notFound);
};

module.exports = initRoute;
