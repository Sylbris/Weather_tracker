import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useSelector } from 'react-redux';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;


const Container = styled.div`
background: #15171c;
display: flex;
justify-content: flex-start;
`
const position = [32.08, 34.78]

const Map = () => {
  const nationalReadings = useSelector((state) => state.nationalReadings);
    return (
      
      <Container>
          <MapContainer
          center={{ lat: 32.08, lng: 34.78 }}
          zoom={7}
          style={{ height: "50vh", width: "100%" }}
          scrollWheelZoom={false}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {
          nationalReadings && Object.values(nationalReadings).map( (val, index) => {
            return (
            <Marker position={val[index].coordinates}>
            <Popup>{val[index].name}</Popup>
            <Tooltip permanent>{val[index].temp}°</Tooltip>
            </Marker> 
            );
          })}
          
        </MapContainer>
      </Container>
  );
}

export default Map;