import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';
import fileRoutes from './routes/file.js';
import readingRoutes from './routes/readings.js';
import extRoutes from './routes/extReadings.js';
import nationalReadingsRoute from './routes/nationalReadings.js';

const app = express();

app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());

// App routes.
app.use('/posts', postRoutes);
app.use('/file', fileRoutes);
app.use('/readings', readingRoutes);
app.use('/ims', extRoutes);
app.use('/nationalReadings', nationalReadingsRoute);
app.use('/user', userRoutes);

const CONNECTION_URL = 'mongodb+srv://weather_tracker:1q2w3e4r@cluster0.hbxbt59.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then( () => app.listen(PORT, () => console.log(`Server running on on port : ${PORT}`)) )
    .catch((error) => console.log(error.message) );


