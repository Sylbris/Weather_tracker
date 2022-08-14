import * as api from '../api';

/**
 * returns async functions that gets a callback function dispatch,
 * and sends that action to dispatch.
 * @returns 
 */
export const getPosts = () => async(dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error){

        console.log(error.message);

    }

}
/**
 * Send the post to the database, through the api.
 * @returns 
 */
export const createPost = (post) => async(dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data});
    }
    catch (error) {
        console.log(error);
    }
}