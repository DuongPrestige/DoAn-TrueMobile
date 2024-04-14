import * as controllers from "../controllers";
import { verifyToken } from "../middlewares/verify_token";
import express from "express";
import { isAdmin, isSaler } from "../middlewares/verify_role";

const router = express.Router();

//=====================API USER==========================//

//PUBLIC ROUTES
router.post("/register", controllers.register);
router.post("/login", controllers.login);
// router.post('/delete-user-by-mail', controllers.handleDeleteUserByEmail)
router.get("/get-user-by-id", controllers.getUserById);

//not done
// router.post('/forgot-password', controllers.handleForgotPassword)

//PRIVATE ROUTES
router.use(verifyToken);
router.get("/get-current-user", controllers.getCurrentUser);
router.put("/update-user", controllers.handleUpdateUser);
router.post("/change-password", controllers.handleChangePassword);

router.use(isAdmin);
router.delete("/delete-user", controllers.handleDeleteUser);
router.get("/get-all-user", controllers.getAllUser);

//other way
// router.get('/getcurrentuser',[verifyToken, isAdmin], controllers.getCurrentUser)

module.exports = router;
