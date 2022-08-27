import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import express from 'express';

import User from '../models/user.js';

const router = express.Router();

export const signin = async(req, res) => {
    const { email, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser){
            return res.status(404).json({ message: "User doesn't exist"});
        }
        
        const isPasswordCorrectCrpt = await bcrypt.compare(password, existingUser.password);
        const isPasswordCorrect = password == existingUser.password ;
        
        if(!isPasswordCorrect && !isPasswordCorrectCrpt){
            return res.status(400).json({ message: "Invalid credentials"});
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', { expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token });
    }
    catch(error){
        res.status(500).json({ message: "Something went wrong"});
    }
}

export const signup = async(req, res) => {
    const { email, password, confirmPassword, fullName, type } = req.body;
    
    try {
        const existingUser = await User.findOne({ email });

        if(existingUser){
            return res.status(400).json({ message: "User already exists"});
        }
        
        if(password !== confirmPassword) {
            return res.status(400).json({ message: "passwords don't match"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({ email, password: hashedPassword, name: `${fullName}`, type })
        
        const token = jwt.sign({ email: result.email, id: result._id}, 'test', { expiresIn: "1h"});

        res.status(200).json( {result, token} );
    }
    catch(error){
        res.status(500).json({ message: "Something went wrong"});
    }
}