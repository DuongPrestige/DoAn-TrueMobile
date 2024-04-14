import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API ADDRESS USER==========================//

//PUBLIC ROUTES


//PRIVATE ROUTES
router.use(verifyToken) 
router.post('/create-new-address-user', controllers.createNewAddressUser)
router.get('/get-all-address-user', controllers.getAllAddressUserByUserId)
router.delete('/delete-address-user', controllers.deleteAddressUser)
router.put('/edit-address-user', controllers.editAddressUser)
router.get('/get-detail-address-user-by-id', controllers.getDetailAddressUserById)

router.use(isAdmin) 





module.exports = router