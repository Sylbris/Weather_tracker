import express from 'express';
import mongoose from 'mongoose';

import ExtReadingsSchema from '../models/extReadingSchema.js';

const router = express.Router();

/**
 * Get all posts method.
 * @param {*} req 
 * @param {*} res 
 */
export const getExtReadings = async(req, res) => {
    try {
        const extReadings = await ExtReadingsSchema.findOne();

        res.status(200).json(extReadings);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

