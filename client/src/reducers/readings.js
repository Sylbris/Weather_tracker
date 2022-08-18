/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (readings = [], action) => {
    switch(action.type){
        case 'GET_CURRENT_READINGS':
            return action.payload;
        case 'UPDATE_READINGS':
            return readings;
        default:
            return readings;
    }
}