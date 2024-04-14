import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API SHOPCART==========================//

//PUBLIC ROUTES



//PRIVATE ROUTES
router.use(verifyToken) 
router.post('/add-shopcart',  controllers.addShopCart)
router.get('/get-all-shopcart-by-userId',  controllers.getAllShopCartByUserId)
router.delete('/delete-item-shopcart',  controllers.deleteItemShopCart)


router.use(isAdmin) 






module.exports = router