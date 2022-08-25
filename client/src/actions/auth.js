import * as api from '../api';

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