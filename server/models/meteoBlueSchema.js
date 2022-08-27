import mongoose from 'mongoose';

const meteoblueSchema = mongoose.Schema({
    temperature: Number,
    wind: Number,
    radiation: Number, 
    humidity: Number,
}, { collection : 'meteoblue' })

var MeteoBlueSchema = mongoose.model('meteoblue', meteoblueSchema);

export default MeteoBlueSchema;