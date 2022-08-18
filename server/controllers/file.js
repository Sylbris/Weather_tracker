import express from 'express';
import mongoose from 'mongoose';

import UploadFile from '../models/fileSchema.js';

const router = express.Router();

/**
 * Upload new file to the database.
 * @param {*} req 
 * @param {*} res 
 */
 export const uploadFile = async(req, res) => {
    // Load the request parameters.
    const { temperature, wind, radiation, humidity} = req.body;
    
    // Create a new Schema, with the parameters.
    const newFile = new UploadFile( { temperature, wind, radiation, humidity });

    try {
        await newFile.save();

        res.status(200).json(newFile);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}

/**
 * Get the file from server.
 * @param {*} req 
 * @param {*} res 
 */
 export const getFile = async(req, res) => {
    try {
        const getFile = await UploadFile.findOne();

        res.status(200).json(getFile);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}