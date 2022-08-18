import express from 'express';

import { uploadFile, getFile } from '../controllers/file.js';

const router = express.Router();

// Post 
router.post("/", uploadFile);

// Get
router.get("/", getFile);

export default router;