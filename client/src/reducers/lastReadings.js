/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (lastReadings = [], action) => {
    switch(action.type){
        case 'GET_LAST_READINGS':
            return action.payload;
        default:
            return lastReadings;
    }
}
