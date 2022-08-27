import { Typography, Paper, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useStyle from './styles';
import axios from "axios";
import { signin } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
/**
 * A simple login form.
 * @returns 
 */
const Login = ({user, setUser}) => {

    const classes = useStyle();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Handle the submit & save it in the localStorage.
    const handleSubmit = async e => {
        e.preventDefault();
        const formData = { email, password };
        dispatch(signin(formData, setUser));
        
    };

    const googleSuccess = (res) => {
        console.log(res);
    }

    const googleFailure = () => {
        console.log("Google login was unsuccessfull");
    }
    return (
        <>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField name="email" variant="outlined" label="E-mail" fullWidth value={email} onChange={ (e) => setEmail( e.target.value )}/>
                <TextField name="password" variant="outlined" label="Password" fullWidth value={password} onChange={ (e) => setPassword( e.target.value )}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
                <GoogleLogin  clientId="GOOGLE ID" render={(renderProps) => {
                    <Button OnClick={renderProps.onClick} vvariant="contained" onSuccess={googleSuccess} onFailure={googleFailure} cookiePolicy="single_host_origin"> Google Sign in </Button>
                }}/>
            </form>
        </Paper>
        </>
    );
}

export default Login;