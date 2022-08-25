import express from 'express';

import { getReadings, uploadReadings } from '../controllers/readings.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getReadings);

// Post 
router.post("/", auth, uploadReadings);

export default router;