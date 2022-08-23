import mongoose from 'mongoose';

const uploadReadings = mongoose.Schema({
    temperature: Number,
    wind: Number,
    radiation: Number, 
    humidity: Number,
    updatedAt:  {
        type: Date,
        default: new Date(),
    },
})

var UploadReadings = mongoose.model('UploadReadings', uploadReadings);

export default UploadReadings;