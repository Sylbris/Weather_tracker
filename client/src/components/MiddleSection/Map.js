import React, { useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import CustomMarker from './CustomMarker/CustomMarker'
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
  const [map, setMap] = useState();
  const nationalReadings = useSelector((state) => state.nationalReadings);
  //console.log(nationalReadings[1][1])
    return (
        <Container>
            <MapContainer
            whenCreated={setMap}
        center={{ lat: 32.08, lng: 34.78 }}
        zoom={7}
        style={{ height: "50vh", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={nationalReadings[0][0].coordinates}>
      <Popup>{nationalReadings[0][0].name}</Popup>
      <Tooltip permanent>{nationalReadings[0][0].temp}°</Tooltip>
    </Marker>
    <Marker position={nationalReadings[1][1].coordinates}>
      <Popup>{nationalReadings[1][1].name}</Popup>
      <Tooltip permanent>{nationalReadings[1][1].temp}°</Tooltip>
    </Marker>
    <Marker position={nationalReadings[2][2].coordinates}>
      <Popup>{nationalReadings[2][2].name}</Popup>
      <Tooltip permanent>{nationalReadings[2][2].temp}°</Tooltip>
    </Marker>
    <Marker position={nationalReadings[3][3].coordinates}>
      <Popup>{nationalReadings[3][3].name}</Popup>
      <Tooltip permanent>{nationalReadings[3][3].temp}°°</Tooltip>
    </Marker>
      </MapContainer>
        </Container>
    );
}

export default Map;