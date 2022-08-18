/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (extReadings = [], action) => {
    switch(action.type){
        case 'GET_CURRENT_IMS_READINGS':
            return action.payload;
        case 'UPDATE_C':
            return extReadings;
        default:
            return extReadings;
    }
}