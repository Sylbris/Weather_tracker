import mongoose from 'mongoose';

const nationalReadingSchema = mongoose.Schema({
    Object: {}
})

var NationalReadingSchema = mongoose.model('nationalreadings', nationalReadingSchema);

export default NationalReadingSchema;