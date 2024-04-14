import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API BLOG==========================//

//PUBLIC ROUTES


//PRIVATE ROUTES
router.use(verifyToken) 
router.post('/create-new-room',  controllers.createNewRoom)
router.post('/sendMessage',  controllers.sendMessage)
router.get('/loadMessage',  controllers.loadMessage)
router.get('/listRoomOfUser',  controllers.listRoomOfUser)

router.use(isAdmin) 
router.get('/listRoomOfAdmin', controllers.listRoomOfAdmin)


module.exports = router