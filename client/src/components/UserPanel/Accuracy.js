import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/**
 * measure accuracy
 * @param {*} extLastReadings 
 * @param {*} lastReadings 
 * @returns 
 */
function measureAccuracy(extLastReadings, lastReadings) {
  var sum = 0;
  for(let i=0; i < extLastReadings.length; i++){
    var diff = Math.abs(extLastReadings[i].temperature - lastReadings[i].temperature);
    diff = diff / lastReadings[i].temperature;
    diff *= 100;
    sum += diff;
  }
  sum /= extLastReadings.length;
  return Math.floor(100 - sum);
}


export default function Accuracy() {
  const extLastReadings = useSelector((state) => state.extLastReadings);
  const lastReadings = useSelector((state) => state.lastReadings);
  var error = measureAccuracy(extLastReadings, lastReadings);

    return (
      <React.Fragment>
        <Paper style={{ width: 200, height: 317, display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignContent: 'center', alignItems: 'center' }} square>
          <Typography>Readings</Typography>
          <div style={{ width: 150, height: 150}}>
            <CircularProgressbar value={error} text={` Accuracy: ${error}%`} styles={buildStyles({
              textSize: '10px',
            })}/>
          </div>
        </Paper>
      </React.Fragment>
    );
  }