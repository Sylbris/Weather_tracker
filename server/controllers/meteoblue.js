import express from 'express';
import mongoose from 'mongoose';

import MeteoBlueSchema from '../models/meteoBlueSchema.js';

const router = express.Router();

/**
 * Get all posts method.
 * @param {*} req 
 * @param {*} res 
 */
export const getMeteoBlueReadings = async(req, res) => {
    try {
        const limit = req.query.limit;

        if(limit){
            const extReadings = await MeteoBlueSchema.find().sort({updatedAt:-1}).limit(limit);
            res.status(200).json(extReadings);
        }
        else {
            const extReadings = await MeteoBlueSchema.findOne().sort({updatedAt:-1});
            res.status(200).json(extReadings);
        }
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

