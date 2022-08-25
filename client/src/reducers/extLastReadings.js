import moment from "moment";
/**
 * redux readings reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (extLastReadings = [], action) => {
    switch(action.type){
        case 'GET_LAST_IMS_READINGS': {
            var data = action.payload;
            // Reverse data and change date display.
            Object.keys(data).map((key)=> {
                data[key].updatedAt = new Date(data[key].updatedAt);
                var dataString = moment(data[key].updatedAt).format('DD-MM-YY');
                data[key].updatedAt = dataString;
            });
            return data.reverse();
        }
        case 'UPDATE_E':
            return extLastReadings;
        default:
            return extLastReadings;
    }
}