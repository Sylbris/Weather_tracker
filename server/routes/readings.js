import express from 'express';

import { getReadings, uploadReadings } from '../controllers/readings.js';

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getReadings);

// Post 
router.post("/", uploadReadings);

export default router;