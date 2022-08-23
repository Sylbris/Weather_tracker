import React, { useState } from 'react';
import { Typography, AppBar, IconButton, Toolbar,
     InputBase, Badge, MenuItem, Menu, Button } from "@material-ui/core";
import AddFileDialog from './AddFileDialog/AddFileDialog';

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
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClickAddConfig = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    
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