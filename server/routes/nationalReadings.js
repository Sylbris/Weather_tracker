import express from 'express';

import { getNationalReadings } from '../controllers/nationalReadings.js';

const router = express.Router();

// Get method use getPosts as middleware.
router.get("/", getNationalReadings);

export default router;