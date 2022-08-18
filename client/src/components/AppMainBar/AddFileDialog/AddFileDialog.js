import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, Button } from "@material-ui/core";
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../../../api';
/**
 * A simple Dialog to upload configuration file.
 * @param {*} props 
 * @returns 
 */
const AddFileDialog = (props) => {
    const classes = useStyles();
    const { onClose, open } = props;
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleUpload = async (e) => {
        e.preventDefault();
        //console.log(file);
        dispatch(uploadFile(JSON.parse(file)));
        clear();
        onClose();
      };
    
    const handleClose = () => {
        onClose();
    };
    
    const clear = () => {
        setFile(null);
    };

    const handleChange = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");

        fileReader.onload = e => {
          //console.log("e.target.result", e.target.result);
          setFile(e.target.result);
        };
      };
    
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Upload configuration file</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please note that the file has to be on json format.
                </DialogContentText>
                <div className={classes.fileInput}>
                    <input type="file" onChange={handleChange}></input>
                </div>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleUpload}>Upload</Button>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default AddFileDialog;