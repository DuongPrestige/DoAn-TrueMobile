import * as controllers from "../controllers";
import { verifyToken } from "../middlewares/verify_token";
import express from "express";
import { isAdmin, isSaler } from "../middlewares/verify_role";

const router = express.Router();

//=====================API PRODUCT==========================//

//PUBLIC ROUTES
router.get("/get-product-detail-by-id", controllers.getDetailProductDetailById);
router.get(
  "/get-product-detail-image-by-id",
  controllers.getDetailProductImageById
);
router.get(
  "/get-all-product-detail-config-by-id",
  controllers.getAllProductDetailConfigById
);
router.get(
  "/get-detail-product-detail-config-by-id",
  controllers.getDetailProductDetailConfigById
);
router.get("/get-all-product-user", controllers.getAllProductUser);
router.get("/get-product-feature", controllers.getProductFeature);
router.get("/get-product-new", controllers.getProductNew);
router.get("/get-product-shopcart", controllers.getProductShopCart);

//PRIVATE ROUTES
router.use(verifyToken);

router.use(isAdmin);
// product table
router.post("/create-new-product", controllers.createNewProduct);
router.put("/update-product", controllers.updateProduct);

router.get("/get-all-product-admin", controllers.getAllProductAdmin);

//active & unactive product
router.post("/unactive-product", controllers.UnactiveProduct);
router.post("/active-product", controllers.ActiveProduct);

// product detail table
router.post("/create-new-product-detail", controllers.createNewProductDetail);
router.put("/update-product-detail", controllers.updateProductDetail);
router.delete("/delete-product-detail", controllers.deleteProductDetail);

// product detail image table
router.post(
  "/create-product-detail-image",
  controllers.createNewProductDetailImage
);
router.put(
  "/update-product-detail-image",
  controllers.updateProductDetailImage
);
router.delete(
  "/delete-product-detail-image",
  controllers.deleteProductDetailImage
);

// product detail config table
router.post(
  "/create-product-detail-config",
  controllers.createNewProductDetailConfig
);
router.put(
  "/update-product-detail-config",
  controllers.updateProductDetailConfig
);
router.delete(
  "/delete-product-detail-config",
  controllers.deleteProductDetailConfig
);

module.exports = router;
