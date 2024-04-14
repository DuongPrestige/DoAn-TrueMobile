import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API VOUCHER==========================//

//PUBLIC ROUTES
router.get('/get-detail-voucher', controllers.getDetailVoucherById)
router.get('/get-all-voucher', controllers.getAllVoucher)
router.get('/get-all-voucher-by-userid', controllers.getAllVoucherByUserId)

//PRIVATE ROUTES
router.use(verifyToken) 
router.post('/save-user-voucher', controllers.saveUserVoucher)

router.use(isAdmin) 
router.post('/create-new-voucher', controllers.createNewVoucher)
router.put('/update-voucher', controllers.updateVoucher)
router.delete('/delete-voucher', controllers.deleteVoucher)


module.exports = router