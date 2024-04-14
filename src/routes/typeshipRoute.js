import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API TYPESHIP==========================//

//PUBLIC ROUTES
router.get('/get-detail-typeship', controllers.getDetailTypeshipById)
router.get('/get-all-typeship', controllers.getAllTypeship)


//PRIVATE ROUTES
router.use(verifyToken) 

router.use(isAdmin) 

router.post('/create-new-typeship', controllers.createNewTypeShip)
router.put('/update-typeship', controllers.updateTypeship)
router.delete('/delete-typeship', controllers.deleteTypeship)



module.exports = router