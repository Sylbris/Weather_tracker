import express from 'express';

import { getWeatherIsrReadings } from '../controllers/weatherISR.js'

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getWeatherIsrReadings);

export default router;