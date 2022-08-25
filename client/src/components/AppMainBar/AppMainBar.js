import React, { useState } from 'react';
import { Typography, AppBar, IconButton, Toolbar,
     InputBase, Badge, MenuItem, Menu, Button, Box } from "@material-ui/core";
import AddFileDialog from './AddFileDialog/AddFileDialog';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// ICON imports
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles';
import ComputerIcon from '@material-ui/icons/Computer';

const AppMainBar = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [user, setUser] = useState();

    const logout = () => {
      dispatch({ type: 'LOGOUT' });

      setUser(null);
    }
    return (
      <div className={classes.grow}>
        <AppBar className={classes.check} position="static">
          <Toolbar className={classes.footer}>
            <ComputerIcon className={classes.menuButton}></ComputerIcon>
            <Typography className={classes.title} variant="h6" noWrap>
              Weather Dashboard Metrics
            </Typography>
            
          </Toolbar>
          
        </AppBar>
      </div>
    );
}

export default AppMainBar;