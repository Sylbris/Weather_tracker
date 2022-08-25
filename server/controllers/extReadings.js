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
        const limit = req.query.limit;

        if(limit){
            const extReadings = await ExtReadingsSchema.find().sort({updatedAt:-1}).limit(limit);
            res.status(200).json(extReadings);
        }
        else {
            const extReadings = await ExtReadingsSchema.findOne().sort({updatedAt:-1});
            res.status(200).json(extReadings);
        }
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

