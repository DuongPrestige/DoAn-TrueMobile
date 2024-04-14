import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API SUPPLIER==========================//

//PUBLIC ROUTES

router.get('/get-detail-supplier-byId', controllers.getDetailSupplierById)
router.get('/get-all-supplier', controllers.getAllSupplier)



//PRIVATE ROUTES
router.use(verifyToken) 

router.use(isAdmin) 
router.post('/create-new-supplier', controllers.createNewSupplier)
router.put('/update-supplier', controllers.updateSupplier)
router.delete('/delete-supplier', controllers.deleteSupplier)



module.exports = router