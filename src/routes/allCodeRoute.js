import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API ALLCODE==========================//

//PUBLIC ROUTES
router.get('/get-all-code', controllers.getAllCodeService)
router.get('/get-list-allcode', controllers.getListAllCodeService)
router.get('/get-detail-all-code-by-id', controllers.getDetailAllCodeById)
router.get('/get-all-category-blog', controllers.getAllCategoryBlog)

//PRIVATE ROUTES
router.use(verifyToken) 

router.use(isAdmin) 
router.post('/create-new-all-code', controllers.handleCreateNewAllCode)
router.post('/update-all-code', controllers.handleUpdateAllCode)
router.delete('/delete-all-code', controllers.handleDeleteAllCode)





module.exports = router