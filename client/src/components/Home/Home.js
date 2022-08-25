import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Map from '../MiddleSection/Map';
import Messages from '../MiddleSection/Messages';
import randomColor from 'randomcolor';
import DataReadings from '../MiddleSection/DataReadings';
import { getNationalReadings } from '../../actions/nationalReadings';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7ECDE',
  },
  paper: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FFFFFF',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
        <>
        <Grid container spacing={3}>
        <Grid item xs>
        </Grid>
        <Grid item xs={5}>
            Israel weather map:
            <Map />
        </Grid>
        <Grid item xs>
            Current weather:
          <DataReadings />
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
        </>
  );
}