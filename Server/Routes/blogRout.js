import express from 'express';
import { addPost, getAllBlogs, updateBlog } from '../Controllers/blogControl.js';
const blogRouter = express.Router();

blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addPost)
blogRouter.put('/update/:id', updateBlog)

export default blogRouter;