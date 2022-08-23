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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserReadData() {
    const classes = useStyles();
    const readings = useSelector((state) => state.readings);
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpen = () => {
        setOpen(true);
      };
    
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
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>wind: {readings.wind}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>humidity: {readings.humidity}</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText>Radiation: {readings.radiation}</ListItemText>
                    </ListItem>
                    <ListItem>
                        <Button variant='contained' onClick={handleOpen}>Add Readings</Button>
                        <DailyReadingsDialog open={open} onClose={handleClose}/>
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