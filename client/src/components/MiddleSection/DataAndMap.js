import React from 'react';
import styled from 'styled-components';
import DataReadings from './DataReadings'
import Map from './Map';
import Messages from './Messages';
import BottomSection from '../BottomSection/BottomSection';

const Container = styled.div`
width: 80%px;
height: 50vh;
display: grid;
grid-template-columns: 1fr 2fr;
`


const DataAndMap = () => {
    return (
        <Container>
            <DataReadings />
            <Map />
        </Container>
    );
}

export default DataAndMap;