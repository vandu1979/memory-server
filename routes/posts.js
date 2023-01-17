import express from 'express'
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'
// set up our router
const router = express.Router();
// start adding our routes
router.get('/', getPosts);
router.post('/', createPost);
//patch is for updating route
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;