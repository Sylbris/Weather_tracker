import * as api from '../api';

/**
 * returns async functions that gets a callback function dispatch,
 * and sends that action to dispatch.
 * @returns 
 */
export const getExtReadings = () => async(dispatch) => {
    try {
        const { data } = await api.getExtReadings();

        dispatch({ type: 'GET_CURRENT_IMS_READINGS', payload: data });
    } catch (error){

        console.log(error.message);

    }

}