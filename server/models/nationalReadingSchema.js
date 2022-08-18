import mongoose from 'mongoose';

const nationalReadingSchema = mongoose.Schema({
    Number:{}
})

var NationalReadingSchema = mongoose.model('nationalreadings', nationalReadingSchema);

export default NationalReadingSchema;