import mongoose from 'mongoose';

const uploadFile = mongoose.Schema({
    temperature: {},
    wind: { },
    radiation: { }, 
    humidity: { },
})

var UploadFile = mongoose.model('UploadFile', uploadFile);

export default UploadFile;