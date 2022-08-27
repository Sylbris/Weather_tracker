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

/**
 * Get last 7 readings.
 * @returns 
 */
 export const getExtReadingsMultiple = () => async(dispatch) => {
    try {
        const { data } = await api.getExtReadingsMultiple();
        
        dispatch({ type: 'GET_LAST_IMS_READINGS', payload: data });
    } catch (error){

        console.log(error.message);

    }

}

export const getMeteoblueReadings = () => async(dispatch) => {
    try {
        const { data } = await api.getMeteoblueReadings();

        dispatch({ type: 'GET_LAST_METEOBLUE_READINGS', payload: data });

    } catch (error){

        console.log(error.message);

    }

}

export const getWeatherIsrReadings = () => async(dispatch) => {
    try {
        const { data } = await api.getWeatherIsrReadings();
        
        dispatch({ type: 'GET_LAST_WEATHERISR_READINGS', payload: data });

    } catch (error){

        console.log(error.message);

    }

}
