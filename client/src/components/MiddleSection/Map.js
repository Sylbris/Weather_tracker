import React from 'react';
import styled from 'styled-components';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Container = styled.div`
background: #15171c;
width: 80%px;
height: 50vh;
display: flex;
justify-content: flex-start;
margin: 20px;
`


const Map = () => {
    return (
        <Container>
            <MapContainer style={{height: '100%', width: '100%'}} center={[32.0461, 34.9816]} zoom={7} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
        </Container>
    );
}

export default Map;