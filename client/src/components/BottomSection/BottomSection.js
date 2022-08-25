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
import { useSelector } from 'react-redux';
import moment from 'moment';

const Container = styled.div`
background: #ffffff;
height: 15vh;
display: flex;
flex-direction: row;
justify-content: Left;
`
/**
 * A component that displays the graph.
 * @returns 
 */
const BottomSection = () => {
    const classes = useStyles();
    const lastReadings = useSelector((state) => state.lastReadings);

    return (
        <Container>
            <LineChart width={850} height={110} data={lastReadings}>
                <XAxis dataKey="updatedAt" tick={{fontSize: 9}} interval={0}/>
                <YAxis tick={{fontSize: 9}}/>
                <Line type="monotone" dataKey="temperature" stroke="#000000" />
             </LineChart>
        </Container>
    );
}

export default BottomSection;