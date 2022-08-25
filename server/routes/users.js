import express from 'express';

import { signin } from '../controllers/user.js';

const router = express.Router();

// Post , Sign in
router.post("/signin", signin);

export default router;