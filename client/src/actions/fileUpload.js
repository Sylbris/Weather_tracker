import * as api from '../api';
/**
 * Upload a file to the database.
 * @returns 
 */
export const uploadFile = (file) => async(dispatch) => {
    try {
        const { data } = await api.uploadFile(file);

        dispatch({ type: 'UPDATE', payload: data});
    }
    catch (error) {
        console.log(error);
    }
}

/**
 * returns async functions that gets a callback function dispatch,
 * and sends that action to dispatch.
 * @returns 
 */
 export const getFile = () => async(dispatch) => {
    try {
        const { data } = await api.getFile();

        dispatch({ type: 'GET_CURRENT', payload: data });
    } catch (error){

        console.log(error.message);

    }

}