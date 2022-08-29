import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MainTabs from './MainTabs/MainTabs';
import Home from '../Home/Home';
import Readings from '../UserPanel/UserPanel';
import { Button } from '@material-ui/core';
import AddUser from '../Settings/AddUser';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    main_tab: {
        backgroundColor: '#F7ECDE',
      },
    check: {
        display: 'flex',
        justifyContent: 'center',
        textAlign:"center",
        color: '#000000',
        backgroundColor: '#F7ECDE',
    },
  }));
/**
 * Contains all the navigation for the app.
 * @param {*} param0 
 * @returns 
 */
export default function AppNavBar({ setUser }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs className={classes.check} value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Readings" {...a11yProps(1)} />
          <Tab label="Add User" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <MainTabs className={classes.main_tab} value={value} index={0}>
        <Home />
      </MainTabs>
      <MainTabs className={classes.main_tab} value={value} index={1}>
        <Readings />
      </MainTabs>
      <MainTabs className={classes.main_tab} value={value} index={2}>
        <AddUser setUser={setUser}/>
      </MainTabs>
    </div>
  );
}