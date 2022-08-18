import mongoose from 'mongoose';

const uploadReadings = mongoose.Schema({
    temperature: Number,
    wind: Number,
    radiation: Number, 
    humidity: Number,
})

var UploadReadings = mongoose.model('UploadReadings', uploadReadings);

export default UploadReadings;