/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (nationalReadings = [], action) => {
    switch(action.type){
        case 'GET_NATIONAL_READINGS':
            return action.payload;
        case 'UPDATE_RN':
            return nationalReadings;
        default:
            return nationalReadings;
    }
}