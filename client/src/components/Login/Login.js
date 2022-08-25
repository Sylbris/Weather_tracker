import { Typography, Paper, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import useStyle from './styles';
import axios from "axios";
import { signin } from '../../actions/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

    return (
        <>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField name="email" variant="outlined" label="E-mail" fullWidth value={email} onChange={ (e) => setEmail( e.target.value )}/>
                <TextField name="password" variant="outlined" label="Password" fullWidth value={password} onChange={ (e) => setPassword( e.target.value )}/>
                <Button className={classes.buttonSubmit} varinat="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
            </form>
        </Paper>
        </>
    );
}

export default Login;