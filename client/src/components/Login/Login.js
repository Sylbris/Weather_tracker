import React from 'react';
import useStyle from './styles';

const Login = () => {
    const classes = useStyle();
    return (
        <h1 className={classes.h1}>Login</h1>
    );
}

export default Login;