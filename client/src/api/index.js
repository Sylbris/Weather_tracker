import axios from 'axios';

////////////////////////BACKEND endpoints////////////////////////////////////////
//Backend endpoint to fetch or retrieve posts.
const url = 'http://localhost:5000/posts';

//Backend endpoint to uploadfiles.
const fileUploadURL = 'http://localhost:5000/file';

//Backend endpoint userdata.
const userReadingsURL = 'http://localhost:5000/readings';

//Backend endpoint userdata.
const userReadingsURLMultiple = 'http://localhost:5000/readings?limit=7';

//Backend endpoint to users.
const userURL = 'http://localhost:5000/users';

//Backend endpoint for external data.
const imsURL = 'http://localhost:5000/ims';

//Backend endpoint for national data.
const nationalReadingsURL = 'http://localhost:5000/nationalReadings';

/////////////////////////////Message METHODS/////////////////////////////////
//Get all posts.
export const fetchPosts = () => axios.get(url);

//Send post.
export const createPost = (newPost) => axios.post(url, newPost);

///////////////////////////////File METHODS////////////////////////////////

//Upload File.
export const uploadFile = (file) => axios.post(fileUploadURL, file);

//Get file.
export const getFile = () => axios.get(fileUploadURL);

//////////////////////////Readings METHODS ////////////////////////////////

export const uploadReadings = (readings) => axios.post(userReadingsURL, readings);

export const getReadings = () => axios.get(userReadingsURL);

export const getReadingsMultiple = () => axios.get(userReadingsURLMultiple);

export const getExtReadings = () => axios.get(imsURL);

export const getNationalReadings = () => axios.get(nationalReadingsURL);