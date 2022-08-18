import { Typography, Paper, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import useStyle from './styles';
import axios from "axios";

/**
 * A simple login form.
 * @returns 
 */
const Login = ({user, setUser}) => {
    const classes = useStyle();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Handle the submit & save it in the localStorage.
    const handleSubmit = async e => {
        e.preventDefault();
        const user = { username, password };

        // send the username and password to the server
        // const response = await axios.post(
        //     "http://blogservice.herokuapp.com/api/login",
        //     user
        // );

        // set the state of the user
        setUser("Dan");

        // store the user in localStorage
        //localStorage.setItem('user', response.data);
        //console.log(response.data);
    };

    return (
        <>
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField name="username" variant="outlined" label="Username" fullWidth value={username} onChange={ (e) => setUsername( { ...username, username: e.target.value })}/>
                <TextField name="password" variant="outlined" label="Password" fullWidth value={password} onChange={ (e) => setUsername( { ...password, password: e.target.value })}/>
                <Button className={classes.buttonSubmit} varinat="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
            </form>
        </Paper>
        </>
    );
}

export default Login;