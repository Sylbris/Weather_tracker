import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getPosts);

// Post 
router.post("/", createPost);

export default router;