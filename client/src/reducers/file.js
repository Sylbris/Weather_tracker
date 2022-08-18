/**
 * redux file reducer.
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
 export default (file = [], action) => {
    switch(action.type){
        case 'GET_CURRENT':
            return action.payload;
        case 'UPLOAD':
            return file;
        default:
            return file;
    }
}