import * as api from '../api';

/**
 * 
 * @param {*} formData 
 * @param {*} setUser 
 * @returns 
 */
export const signin = (formData, setUser) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: 'AUTH', data });

        setUser(data);
    }
    catch(error){
        console.log(error);
    }
}

/**
 * 
 * @param {*} formData 
 * @param {*} setUser 
 * @returns 
 */
 export const signup = (formData, setUser) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: 'AUTH', data });

    }
    catch(error){
        console.log(error);
    }
}