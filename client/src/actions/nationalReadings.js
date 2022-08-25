import * as api from '../api';

/**
 * returns async functions that gets a callback function dispatch,
 * and sends that action to dispatch.
 * @returns 
 */
export const getNationalReadings = () => async(dispatch) => {
    try {
        const { data } = await api.getNationalReadings();
        dispatch({ type: 'GET_NATIONAL_READINGS', payload: data });
    } catch (error){
        console.log(error.message);

    }

}