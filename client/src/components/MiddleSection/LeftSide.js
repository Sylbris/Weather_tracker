import React from 'react';
import styled from 'styled-components';
import DataReadings from './DataReadings'
import Map from './Map';
import Messages from './Messages';
import BottomSection from '../BottomSection/BottomSection';
import DataAndMap from './DataAndMap';

const Container = styled.div`
width: 80%px;
height: 83vh;
display: grid;
grid-template-rows: 2fr 1fr;
`


const LeftSide = () => {
    return (
        <Container>
            <DataAndMap />
            <BottomSection />
        </Container>
    );
}

export default LeftSide;