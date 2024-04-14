import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API BANNER==========================//

//PUBLIC ROUTES
router.get('/get-detail-banner', controllers.getDetailBanner)
router.get('/get-all-banner', controllers.getAllBanner)


//PRIVATE ROUTES
router.use(verifyToken) 

router.use(isAdmin) 
router.post('/create-new-banner', controllers.createNewBanner)
router.put('/update-banner',  controllers.updateBanner)
router.delete('/delete-banner',  controllers.deleteBanner)





module.exports = router