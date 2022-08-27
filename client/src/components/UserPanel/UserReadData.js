import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Divider, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import DailyReadingsDialog from '../UserData/DailyReadingsDialog/DailyReadingsDialog';
import AddFileDialog from '../AppMainBar/AddFileDialog/AddFileDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  configuration: {
    display:'flex',
    justifyContent:'flex-end',
  }
}));

function createStatusReadings(readings, configuration){
    var readingStatus = {};
    for(const prop in readings){
        if(prop !== '_id' && prop !== '__v' && prop !== 'updatedAt'){
            var key = prop.toString();
            if(readings[prop] < configuration[prop].min){
                readingStatus[key] = 'LOW';
            }
            else if(readings[prop] > configuration[prop].max){
                readingStatus[key] = 'HIGH';
            }
            else {
                readingStatus[key] = 'NORMAL';
            }
        }
    }
    return readingStatus;
}

export default function UserReadData() {
    
    const readings = useSelector((state) => state.readings);
    const configuration = useSelector((state) => state.file);
    const [open, setOpen] = useState(false);
    const [openCFG, setOpenCFG] = useState(false);
    
    const readingStatus = createStatusReadings(readings, configuration);
    const classes = useStyles({readingStatus});

    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpenCFG= () => {
        setOpenCFG(true);
      };
    const handleCloseCFG= () => {
        setOpenCFG(false);
      };
    
    const handleOpen = () => {
        setOpen(true);
      };

    //Change text color based on status condition.
    const getColor = (status) => {
        if(status === "NORMAL"){
            return '#42855B';
        }
        if(status === "HIGH"){
            return '#FF4A4A';
        }
        if(status === "LOW"){
            return '#E38B29';
        }
    }

    return (
        <>
        <Paper square>
            <Grid container spacing={0}>
                <Grid item xs={6}>
                <List>
                    <ListItem>
                        <ListItemText><Typography variant='h5'>User measured readings</Typography></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>Temperature: {readings.temperature}°</ListItemText>
                        <Tooltip title={configuration.temperature.min + ' - ' + configuration.temperature.max} placement="right">
                            <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.temperature) }} >{readingStatus.temperature}</ListItemText>
                        </Tooltip>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>wind: {readings.wind} km/h</ListItemText>
                        <Tooltip title={configuration.wind.min + ' - ' + configuration.wind.max} placement="right">
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.wind) }}>{readingStatus.wind}</ListItemText>
                        </Tooltip>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>humidity: {readings.humidity} %</ListItemText>
                        <Tooltip title={configuration.humidity.min + ' - ' + configuration.humidity.max} placement="right">
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.humidity) }}>{readingStatus.humidity}</ListItemText>
                        </Tooltip>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>Radiation: {readings.radiation} UV</ListItemText>
                        <Tooltip title={configuration.radiation.min + ' - ' + configuration.radiation.max} placement="right">
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.radiation) }}>{readingStatus.radiation}</ListItemText>
                        </Tooltip>
                    </ListItem>
                    <ListItem>
                        <Button variant='contained' onClick={handleOpen}>Add Readings</Button>
                        <DailyReadingsDialog open={open} onClose={handleClose}/>
                        <ListItemText className={classes.configuration}>
                            <Button variant='contained' onClick={handleOpenCFG}>Upload configuration</Button>
                            <AddFileDialog openCFG={openCFG} onClose={handleCloseCFG}></AddFileDialog>
                        </ListItemText>
                    </ListItem>
                </List>
                </Grid>
                <Grid item xs={6}>
                </Grid>
            </Grid>
        </Paper>
        </>
    );
}