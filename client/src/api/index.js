import axios from 'axios';
/**
 * Used to retrieve data from an endpoint.
 */
const url = 'http://localhost:5000/posts';

//Get all posts.
export const fetchPosts = () => axios.get(url);

//Send post.
export const createPost = (newPost) => axios.post(url, newPost);