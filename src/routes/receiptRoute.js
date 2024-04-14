import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API RECEIPT==========================//

//PUBLIC ROUTES


router.get('/get-detail-receipt', controllers.getDetailReceiptById)
router.get('/get-all-receipt', controllers.getAllReceipt)


//PRIVATE ROUTES
router.use(verifyToken) 


router.use(isAdmin) 
router.post('/create-new-receipt', controllers.createNewReceipt)
router.post('/create-new-detail-receipt', controllers.createNewReceiptDetail)
router.put('/update-receipt', controllers.updateReceipt)
router.delete('/delete-receipt', controllers.deleteReceipt)




module.exports = router