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
import Login from './components/Login/Login';
import { getFile } from './actions/fileUpload';
import { getReadings } from './actions/readings';
import { getExtReadings } from './actions/extReadings';
import { getNationalReadings } from './actions/nationalReadings';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState();

    //We start the process of fetching the messages.
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getFile());
    }, []);

    useEffect(() => {
        dispatch(getReadings());
    }, []);

    useEffect(() => {
        dispatch(getExtReadings());
    }, []);

    useEffect(() => {
        dispatch(getNationalReadings());
    }, []);

    if(!user){
        return (<Login user={user} setUser={setUser}></Login>);
    }

    return (
        <div style={{backgroundImage: `url(${background})`, }}>
            <Router>
                    <AppMainBar />
                    <UserData />
                    <MiddleSection />
                    <BottomSection />
            </Router>
        </div>
    )
}

export default App;