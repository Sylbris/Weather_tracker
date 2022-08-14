import React from 'react';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import ToysIcon from '@material-ui/icons/Toys';
import useStyles from './styles';

const data = [{name: 'Page A', uv: 300, pv: 2400, amt: 2400},
 {name: 'Page B', uv: 420, pv: 2400, amt: 2400},
  {name: 'Page C', uv: 240, pv: 2400, amt: 2400},
  {name: 'Page D', uv: 100, pv: 2400, amt: 2400},
  {name: 'Page E', uv: 230, pv: 2400, amt: 2400}];

  const data_1 = [{name: 'Page A', uv: 300, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 420, pv: 2400, amt: 2400},
   {name: 'Page C', uv: 240, pv: 2400, amt: 2400},
   {name: 'Page D', uv: 100, pv: 2400, amt: 2400},
   {name: 'Page E', uv: 230, pv: 2400, amt: 2400}];

const data_2 = [{name: 'Page A', uv: 300, pv: 2400, amt: 2400},
   {name: 'Page B', uv: 420, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 240, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 100, pv: 2400, amt: 2400},
    {name: 'Page E', uv: 230, pv: 2400, amt: 2400}];

const Container = styled.div`
background: #15171c;
width: 80%px;
height: 15vh;
display: flex;
flex-direction: row;
justify-content: Left;
margin: 20px;
`

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.grey[100],
      height: theme.spacing(3),
      color: theme.palette.grey[800],
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[300],
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    },
  }))(Chip);

const BottomSection = () => {
    const classes = useStyles();

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
      }

    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" className={classes.mainContainer}>
                <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="Temp"
                    color="infoPrimary"
                    icon={<WbSunnyIcon fontSize="small" />}
                    onClick={handleClick}
                />
                <StyledBreadcrumb component="a" href="#" label="Moist" onClick={handleClick} icon={<InvertColorsIcon fontSize="small" />}/>
                <StyledBreadcrumb
                    label="Wind"
                    icon={<ToysIcon fontSize="small" />}
                    onClick={handleClick}
                />
                </Breadcrumbs>
            <LineChart width={800} height={80} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#ffeb99" />
             </LineChart>
        </Container>
    );
}

export default BottomSection;