// Import modules
import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

// Import components
import Messages from './components/Messages/Message/Message';
import UserData from './components/UserData/UserData';
import Sidebar from './components/Navbar/Sidebar';
import useStyles from './styles';
import styledComponents from './styles';
import MiddleSection from './components/MiddleSection/MiddleSection';
import BottomSection from './components/BottomSection/BottomSection';
import AppMainBar from './components/AppMainBar/AppMainBar';
import background from "./images/background.jpg";
import { getFile } from './actions/fileUpload';
import { getReadings, getReadingsMultiple } from './actions/readings';
import { getExtReadings, getExtReadingsMultiple } from './actions/extReadings';
import { getNationalReadings } from './actions/nationalReadings';
import AppNavBar from './components/AppNavBar/AppNavBar';
import { getReadingsWeekly } from './api';
import Login from './components/Login/Login';
import AppMainPage from './components/AppMainPage/AppMainPage';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    //We start the process of fetching the messages.
    useEffect(() => {
        dispatch(getPosts());
    }, []);
    
    useEffect(() => {
        dispatch(getFile());
    }, []);

    useEffect(() => {
        dispatch(getReadings());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getReadingsMultiple());
    }, []);

    useEffect(() => {
        dispatch(getExtReadingsMultiple());
    }, []);

    useEffect(() => {
        dispatch(getExtReadings());
    }, []);
    
    useEffect(() => {
        dispatch(getNationalReadings());
    }, []);
    
    return (
        <Router>
            <AppMainBar />
            <AppMainPage />    
        </Router>
    );
};

export default App;