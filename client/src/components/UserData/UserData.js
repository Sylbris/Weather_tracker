import React from 'react';
import { FaIcons, FaRadiation, FaTemperatureHigh, FaWater, FaWind } from 'react-icons/fa';
import styled from 'styled-components';
import DataParameters from './DataParameters';
import Datawidget from './Datawidget';

const Container = styled.div`
background: #15171c;
width: 80%px;
height: 18vh;
margin: 20px;
`
const Userdata = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
justify-content: center;
`

const UserData = () => {
    return (
        <Container>
            <Userdata>
                <Datawidget icon={<FaTemperatureHigh />} text="27"></Datawidget>
                <Datawidget icon={<FaWind />} text="10 km/h"></Datawidget>
                <Datawidget icon={<FaRadiation />} text="15 UV"></Datawidget>
                <Datawidget icon={<FaWater />} text="80%"></Datawidget>
            </Userdata>
        </Container>
    );
}

export default UserData;