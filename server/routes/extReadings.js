import express from 'express';

import { getExtReadings } from '../controllers/extReadings.js';

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getExtReadings);

export default router;