import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API TYPEVOUCHER==========================//

//PUBLIC ROUTES
router.get('/get-detail-typevoucher', controllers.getDetailTypeVoucherById)
router.get('/get-all-typevoucher', controllers.getAllTypeVoucher)
router.get('/get-select-typevoucher', controllers.getSelectTypeVoucher)

//PRIVATE ROUTES
router.use(verifyToken) 

router.use(isAdmin) 
router.post('/create-new-typevoucher', controllers.createNewTypeVoucher)
router.put('/update-typevoucher', controllers.updateTypeVoucher)
router.delete('/delete-typevoucher', controllers.deleteTypeVoucher)


module.exports = router