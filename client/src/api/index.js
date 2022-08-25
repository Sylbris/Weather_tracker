import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

/////////////////////////////Message METHODS/////////////////////////////////
//Get all posts.
export const fetchPosts = () => API.get('/posts');

//Send post.
export const createPost = (newPost) => API.post('/posts', newPost);

///////////////////////////////File METHODS////////////////////////////////

//Upload File.
export const uploadFile = (file) => API.post('/file', file);

//Get file.
export const getFile = () => API.get('/file');

//////////////////////////Readings METHODS ////////////////////////////////

export const uploadReadings = (readings) => API.post('/readings', readings);

export const getReadings = () => API.get('/readings');

export const getReadingsMultiple = () => API.get('/readings?limit=7');

export const getExtReadingsMultiple = () => API.get('/ims?limit=7');

export const getExtReadings = () => API.get('/ims');

export const getNationalReadings = () => API.get('/nationalReadings');

///////////////// SIGN IN///////////////////////////

export const signIn = (formData) => API.post('/user/signin', formData);