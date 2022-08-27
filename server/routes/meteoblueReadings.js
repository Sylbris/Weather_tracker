import express from 'express';

import { getMeteoBlueReadings } from '../controllers/meteoblue.js';

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getMeteoBlueReadings);

export default router;