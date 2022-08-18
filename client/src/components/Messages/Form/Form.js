import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography, Paper, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import useStyles from './styles'
import { createPost } from '../../../api';

/**
 * This component holds the post tab,
 * which submits the form to the database.
 * @returns 
 */
const Form = () => {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', type: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        //Prevents the browser from refreshing/reloading.
        e.preventDefault();
        //Dispatch the action.
        dispatch(createPost(postData));
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={ (e) => setPostData( { ...postData, message: e.target.value })}/>
                <Button className={classes.buttonSubmit} varinat="contained" color="primary" size="large" type="submit" fullWidth>Post</Button>
            </form>
        </Paper>
    );
}

export default Form;