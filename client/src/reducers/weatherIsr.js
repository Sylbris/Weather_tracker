/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (weatherIsrReadings = [], action) => {
    switch(action.type){
        case 'GET_LAST_WEATHERISR_READINGS': {
            return action.payload;
        }
        case 'UPDATE_WIS':
            return weatherIsrReadings;
        default:
            return weatherIsrReadings;
    }
}