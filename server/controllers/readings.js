import express from 'express';
import mongoose from 'mongoose';

import UploadReadings from '../models/readingsSchema.js';

const router = express.Router();

/**
 * Get all posts method.
 * @param {*} req 
 * @param {*} res 
 */
export const getReadings = async(req, res) => {
    try {
        const uploadReadings = await UploadReadings.findOne();

        res.status(200).json(uploadReadings);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

/**
 * Send a new post to the database.
 * @param {*} req 
 * @param {*} res 
 */
export const uploadReadings = async(req, res) => {
    // Load the request parameters.
    const { temperature, wind, humidity, radiation } = req.body;

    // Create a new Schema, with the parameters.
    const newReadings = new UploadReadings( { temperature, wind, humidity, radiation});

    try {
        await newReadings.save();

        res.status(200).json(newReadings);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}
