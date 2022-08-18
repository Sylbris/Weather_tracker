import express from 'express';
import mongoose from 'mongoose';

import NationalReadingSchema from '../models/nationalReadingSchema.js';

const router = express.Router();

/**
 * Get all posts method.
 * @param {*} req 
 * @param {*} res 
 */
export const getNationalReadings = async(req, res) => {
    try {
        const nationalReadings = await NationalReadingSchema.find();

        res.status(200).json(nationalReadings);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

