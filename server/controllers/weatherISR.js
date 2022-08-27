import express from 'express';
import mongoose from 'mongoose';

import WeatherItsIsraelSchema from '../models/weatherItsIsraelSchema.js';

const router = express.Router();

/**
 * Get all posts method.
 * @param {*} req 
 * @param {*} res 
 */
export const getWeatherIsrReadings = async(req, res) => {
    try {
        const limit = req.query.limit;

        if(limit){
            const extReadings = await WeatherItsIsraelSchema.find().sort({updatedAt:-1}).limit(limit);
            res.status(200).json(extReadings);
        }
        else {
            const extReadings = await WeatherItsIsraelSchema.findOne().sort({updatedAt:-1});
            res.status(200).json(extReadings);
        }
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

