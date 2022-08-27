import * as api from '../api';

/**
 * returns async functions that gets a callback function dispatch,
 * and sends that action to dispatch.
 * @returns 
 */
export const getReadings = () => async(dispatch) => {
    try {
        const { data } = await api.getReadings();

        dispatch({ type: 'GET_CURRENT_READINGS', payload: data });
    } catch (error){
        
        console.log(error.message);

    }

}
/**
 * Get last 7 readings.
 * @returns 
 */
export const getReadingsMultiple = () => async(dispatch) => {
    try {
        const { data } = await api.getReadingsMultiple();
        
        dispatch({ type: 'GET_LAST_READINGS', payload: data });
    } catch (error){

        console.log(error.message);

    }

}
/**
 * Send the post to the database, through the api.
 * @returns 
 */
export const createReadings = (readings) => async(dispatch) => {
    try {
        const { data } = await api.uploadReadings(readings);
        
        dispatch({ type: 'UPDATE_READINGS', payload: data});
    }
    catch (error) {
        console.log(error);
    }
}