/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (meteoblueReadings = [], action) => {
    switch(action.type){
        case 'GET_LAST_METEOBLUE_READINGS': {
            console.log(action.payload);
            return action.payload;
        }
        case 'UPDATE_MBR':
            return meteoblueReadings;
        default:
            return meteoblueReadings;
    }
}