import React, { useState } from 'react';
import { FaIcons, FaRadiation, FaTemperatureHigh, FaWater, FaWind } from 'react-icons/fa';
import styled from 'styled-components';
import DataParameters from './DataParameters';
import Datawidget from './Datawidget';
import { useSelector } from 'react-redux';
import { getFile } from '../../actions/fileUpload';
import { Button } from '@material-ui/core';
import DailyReadingsDialog from './DailyReadingsDialog/DailyReadingsDialog';

const Container = styled.div`
background: #15171c;

height: 18vh;
`
const Userdata = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
align-items: center;
justify-content: center;
`

const UserData = () => {
    const file = useSelector((state) => state.file);
    const readings = useSelector((state) => state.readings);
    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
      };
    const handleOpen = () => {
        setOpen(true);
      };
    
    return (
        <Container>
            <Userdata>
                <Datawidget icon={<FaTemperatureHigh />} text={readings.temperature} range={file.temperature.min}></Datawidget>
                <Datawidget icon={<FaWind />} text={readings.wind} range={file.wind.min}></Datawidget>
                <Datawidget icon={<FaRadiation />} text={readings.radiation} range={file.radiation.min}></Datawidget>
                <Datawidget icon={<FaWater />} text={readings.humidity} range={file.humidity.min}></Datawidget>
                <Button variant="contained" color="secondary" onClick={handleOpen}> Add daily readings </Button>
                <DailyReadingsDialog open={open} onClose={handleClose}/>
            </Userdata>
        </Container>
    );
}

export default UserData;