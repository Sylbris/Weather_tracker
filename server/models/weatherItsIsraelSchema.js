import mongoose from 'mongoose';

const weatherItsIsraelSchema = mongoose.Schema({
    temperature: Number,
    wind: Number,
    radiation: Number, 
    humidity: Number,
}, { collection : 'weather_its_isr' })

var WeatherItsIsraelSchema = mongoose.model('weatherItsIsrael', weatherItsIsraelSchema);

export default WeatherItsIsraelSchema;