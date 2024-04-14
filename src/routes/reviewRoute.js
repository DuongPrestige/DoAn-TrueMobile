import * as controllers from '../controllers'
import {verifyToken} from '../middlewares/verify_token'
import express from 'express'
import {isAdmin, isSaler} from '../middlewares/verify_role'

const router = express.Router()

//=====================API REVIEW==========================//

//PUBLIC ROUTES
router.get('/get-all-review-by-productId', controllers.getAllReviewByProductId)

router.get('/get-all-comment-by-blogId', controllers.getAllCommentByBlogId)


//PRIVATE ROUTES
router.use(verifyToken) 
//add review
router.post('/create-new-review',  controllers.createNewReview)
router.delete('/delete-review',  controllers.deleteReview)



// comment
router.post('/create-new-comment', controllers.createNewComment)
router.delete('/delete-comment',  controllers.deleteComment)

router.post('/reply-review', controllers.ReplyReview)
router.post('/reply-comment',  controllers.ReplyComment)

router.use(isAdmin) 





module.exports = router