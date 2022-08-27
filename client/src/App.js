// Import modules
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

// Import components
import useStyles from './styles';
import AppMainBar from './components/AppMainBar/AppMainBar';
import { getFile } from './actions/fileUpload';
import { getReadings, getReadingsMultiple } from './actions/readings';
import { getExtReadings, getExtReadingsMultiple, getMeteoblueReadings, getWeatherIsrReadings } from './actions/extReadings';
import { getNationalReadings } from './actions/nationalReadings';
import AppMainPage from './components/AppMainPage/AppMainPage';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect( () => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, []);
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
        dispatch(getMeteoblueReadings());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getWeatherIsrReadings());
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
            <AppMainBar user={user} setUser={setUser}/>
            <AppMainPage user={user} setUser={setUser}/>    
        </Router>
    );
};

export default App;