import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API ORDER==========================//

//PUBLIC ROUTES
router.get('/get-all-order', controllers.getAllOrders)
router.get('/get-detail-order', controllers.getDetailOrderById)
router.put('/confirm-order', controllers.confirmOrder)
router.get('/get-all-order-by-shipper', controllers.getAllOrdersByShipper)
router.post('/vnpay_return', controllers.confirmOrderVnpay)
router.put('/update-image-order', controllers.updateImageOrder)


//PRIVATE ROUTES
router.use(verifyToken) 
router.post('/create-new-order', controllers.createNewOrder)
router.put('/update-status-order', controllers.updateStatusOrder)
router.get('/get-all-order-by-user', controllers.getAllOrdersByUser)
router.post('/payment-order', controllers.paymentOrder)
router.post('/payment-order-success', controllers.paymentOrderSuccess)

router.post('/payment-order-vnpay-success', controllers.paymentOrderVnpaySuccess)
router.post('/payment-order-vnpay', controllers.paymentOrderVnpay)



router.use(isAdmin) 





module.exports = router