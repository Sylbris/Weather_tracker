import React from 'react';
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
import UserData from '../UserData/UserData';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import UserReadData from './UserReadData';
import BottomSection from '../BottomSection/BottomSection';
import Accuracy from './Accuracy';

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
    width: '300',
    height: '500',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function UserPanel() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
        <>
        <Grid container spacing={3}>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={6}>
            <UserReadData />
        </Grid>
        <Grid item xs={2}>
        <Accuracy />
          </Grid>
        <Grid item xs={2}>
          
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
            <BottomSection />
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
        </>
  );
}