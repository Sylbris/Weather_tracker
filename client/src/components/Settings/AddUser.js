import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, TextField, Paper, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7ECDE',
    padding: '2px',
  },
  paper: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
    padding: '5px',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const handleSubmit = (e) => {

}

export default function AddUser({ setUser }) {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [userData, setUserData] = useState({ email: '', password: '', confirmPassword: '', fullName: '', type: '1' });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

    //Handle the submit & save it in the localStorage.
  const handleSubmit = async e => {
        e.preventDefault();
        dispatch(signup(userData, setUser));
        clear();
        
    };

const clear = () => {
  setUser({ email: '', password: '', confirmPassword: '', fullName: '', type: '1' });
}
  
  return (
        <>
        <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={5}>
            <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit}>
                    <TextField name="email" variant="outlined" label="E-mail" fullWidth value={userData.email} onChange={ (e) => setUserData( { ...userData, email: e.target.value })}/>
                    <TextField name="fullName" variant="outlined" label="Full Name" fullWidth value={userData.fullName} onChange={ (e) => setUserData( { ...userData, fullName: e.target.value })}/>
                    <TextField name="password" variant="outlined" label="Password" fullWidth value={userData.password} onChange={ (e) => setUserData( { ...userData, password: e.target.value })}/>
                    <TextField name="confirmPassword" variant="outlined" label="Confirm Password" fullWidth value={userData.confirmPassword} onChange={ (e) => setUserData( { ...userData, confirmPassword: e.target.value })}/>

                    <RadioGroup aria-label="User level" name="type" value={userData.type} onChange={(e) => setUserData( { ...userData, type: e.target.value })}>
                    <FormControlLabel value="1" control={<Radio />} label="Admin" />
                    <FormControlLabel value="2" control={<Radio />} label="Regular User" />
                    </RadioGroup>

                    <Button className={classes.buttonSubmit} varinat="contained" color="primary" size="large" type="submit" fullWidth>Add User</Button>
                </form>
            </Paper>
        </Grid>
        
        <Grid item xs>
        </Grid>
      </Grid>
        </>
  );
}