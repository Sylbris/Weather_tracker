import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

/**
 * Get all posts method.
 * @param {*} req 
 * @param {*} res 
 */
export const getPosts = async(req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
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
export const createPost = async(req, res) => {
    // Load the request parameters.
    const { title, message, type } = req.body;

    // Create a new Schema, with the parameters.
    const newPostMessage = new PostMessage( { title, message, type});

    try {
        await newPostMessage.save();

        res.status(200).json(newPostMessage);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}
