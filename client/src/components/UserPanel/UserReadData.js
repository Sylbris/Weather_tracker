import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { Button, Divider, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import DailyReadingsDialog from '../UserData/DailyReadingsDialog/DailyReadingsDialog';
import { RiContactsBookLine } from 'react-icons/ri';

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
        if(prop != '_id' && prop != '__v' && prop != 'updatedAt'){
            var key = prop.toString();
            if(readings.prop < configuration[prop].min){
                readingStatus[key] = 'LOW';
            }
            if(readings.prop > configuration[prop].max){
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
    
    const readingStatus = createStatusReadings(readings, configuration);
    const classes = useStyles({readingStatus});

    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpen = () => {
        setOpen(true);
      };

    //Change text color based on status condition.
    const getColor = (status) => {
        if(status == "NORMAL"){
            return '#42855B';
        }
        if(status == "HIGH"){
            return '#FF4A4A';
        }
        if(status == "LOW"){
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
                        <ListItemText>Temperature: {readings.temperature}</ListItemText>
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.temperature) }} >{readingStatus.temperature}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>wind: {readings.wind}</ListItemText>
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.wind) }}>{readingStatus.wind}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>humidity: {readings.humidity}</ListItemText>
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.humidity) }}>{readingStatus.humidity}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>Radiation: {readings.radiation}</ListItemText>
                        <ListItemText className={classes.configuration} style={{ color: getColor(readingStatus.radiation) }}>{readingStatus.radiation}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <Button variant='contained' onClick={handleOpen}>Add Readings</Button>
                        <DailyReadingsDialog open={open} onClose={handleClose}/>
                        <ListItemText className={classes.configuration}>
                            <Button variant='contained' onClick={handleOpen}>Upload configuration</Button>
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