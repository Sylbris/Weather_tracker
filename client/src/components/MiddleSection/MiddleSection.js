import React from 'react';
import styled from 'styled-components';
import DataReadings from './DataReadings'
import Map from './Map';
import Messages from './Messages';
import BottomSection from '../BottomSection/BottomSection';
import LeftSide from './LeftSide';

const Container = styled.div`
width: 80%px;
height: 90vh;
display: grid;
grid-template-columns: 3fr 1fr;
justify-content: flex-start;

`


const MiddleSection = () => {
    return (
        <Container>
            <LeftSide />
            <Messages />
        </Container>
    );
}

export default MiddleSection;