/**
 * A typical redux reducer, the reducer gets a state and an action.
 * based on the action type we perform different operations.
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}