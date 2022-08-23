import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button, Paper, TextField } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../../api';
import { createReadings, getReadings } from "../../../actions/readings";

/**
 * A simple Dialog to upload configuration file.
 * @param {*} props 
 * @returns 
 */
const DailyReadingsDialog = (props) => {
    const classes = useStyles();
    const { onClose, open } = props;
    const [readings, setReadings] = useState({
        temperature: '', wind: '', humidity: '', radiation: ''
    });

    const dispatch = useDispatch();
    
    const handleClose = () => {
        onClose();
    };
    
    const clear = () => {
        setReadings(null);
    };

    const handleSubmit = async (e) => {
        //Prevents the browser from refreshing/reloading.
        e.preventDefault();
        //Dispatch the action.
        if(readings.humidity && readings.wind && readings.temperature && readings.radiation){
            dispatch(createReadings(readings));
        }
        else {
            console.log("Missing data");
        }
        onClose();
        //Update the readings accordingly.
        
    }
    
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Upload readings</DialogTitle>
            <DialogContent>
                <Paper className={classes.paper}>
                    <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                        <TextField name="temperature" variant="outlined" label="Temperature" fullWidth value={readings.temperature} onChange={ (e) => setReadings( { ...readings, temperature: e.target.value })}/>
                        <TextField name="wind" variant="outlined" label="Wind" fullWidth value={readings.wind} onChange={ (e) => setReadings( { ...readings, wind: e.target.value })}/>
                        <TextField name="humidity" variant="outlined" label="Humidity" fullWidth value={readings.humidity} onChange={ (e) => setReadings( { ...readings, humidity: e.target.value })}/>
                        <TextField name="radiation" variant="outlined" label="Radiation" fullWidth value={readings.radiation} onChange={ (e) => setReadings( { ...readings, radiation: e.target.value })}/>
                        <Button className={classes.buttonSubmit} varinat="contained" color="primary" size="large" type="submit" fullWidth>Update</Button>
                    </form>
                </Paper>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default DailyReadingsDialog;