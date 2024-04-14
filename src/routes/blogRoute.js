import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API BLOG==========================//

//PUBLIC ROUTES
router.get('/get-detail-blog', controllers.getDetailBlogById)
router.get('/get-all-blog', controllers.getAllBlog)
router.get('/get-feature-blog', controllers.getFeatureBlog)
router.get('/get-new-blog', controllers.getNewBlog)

//PRIVATE ROUTES
router.use(verifyToken) 

router.use(isAdmin) 
router.post('/create-new-blog', controllers.createNewBlog)
router.put('/update-blog', controllers.updateBlog)
router.delete('/delete-blog', controllers.deleteBlog)




module.exports = router