import mongoose from 'mongoose';

const extReadingsSchema = mongoose.Schema({
    temperature: Number,
    wind: Number,
    radiation: Number, 
    humidity: Number,
})

var ExtReadingsSchema = mongoose.model('ims', extReadingsSchema);

export default ExtReadingsSchema;