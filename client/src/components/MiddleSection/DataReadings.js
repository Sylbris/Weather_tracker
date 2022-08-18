import React from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Map from './Map';
import { useSelector } from 'react-redux';
import { FaIcons, FaRadiation, FaTemperatureHigh, FaWater, FaWind } from 'react-icons/fa';
import ExtDataWidget from './ExtDataWidget/ExtDataWidget';

const Container = styled.div`
background: #15171c;
width: 80%px;
height: 50vh;
display: flex;
justify-content: Left;
align-items:Left;
margin: 20px;
`
const STabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  width: 100%;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  margin-right: 4px;
  border: 0px solid black;
  padding: 4px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    color: white;
    background: #14121b;
    border-bottom: 0px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 0, .5)
  }

  &:hover {
    color: white;
    background: #14121b;
    border-bottom: 0px solid white;
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  max-height: 40vh;
  min-width: 40vh;
  border: 0px solid black;
  padding: 4px;
  margin-top: -5px;
  background: #14121b;
  &.is-selected {
    display: block;
  }
`;

STabPanel.tabsRole = 'TabPanel';


const DataReadings = () => {
  const extReadings = useSelector((state) => state.extReadings);

    return (
        <Container>
        <STabs selectedTabClassName='is-selected'
    selectedTabPanelClassName='is-selected'>
            <STabList>
                <STab>IMS</STab>
                <STab>AccuWeather</STab>
                <STab>OpenWeather</STab>
            </STabList>

            <STabPanel>
                <h2 style={{color:'#E2C044'}}>Israeli Meteorological Service</h2>
                <h3 style={{color:'#E2C044'}}> Temperature: {extReadings.temperature}° </h3>
                <h3 style={{color:'#E2C044'}}> Wind: {extReadings.wind} km/h</h3>
                <h3 style={{color:'#E2C044'}}> Radiation: {extReadings.radiation} UV</h3>
                <h3 style={{color:'#E2C044'}}> Humidity: {extReadings.humidity}%</h3>
            </STabPanel>
            <STabPanel>
                <h2 style={{color:'#E2C044'}}>AccuWeather</h2>
                <h3 style={{color:'#E2C044'}}> Temperature: {extReadings.temperature}° </h3>
                <h3 style={{color:'#E2C044'}}> Wind: {extReadings.wind} km/h</h3>
                <h3 style={{color:'#E2C044'}}> Radiation: {extReadings.radiation} UV</h3>
                <h3 style={{color:'#E2C044'}}> Humidity: {extReadings.humidity}%</h3>
            </STabPanel>
            <STabPanel>
                <h2 style={{color:'#E2C044'}}>OpenWeather</h2>
                <h3 style={{color:'#E2C044'}}> Temperature: {extReadings.temperature}° </h3>
                <h3 style={{color:'#E2C044'}}> Wind: {extReadings.wind} km/h</h3>
                <h3 style={{color:'#E2C044'}}> Radiation: {extReadings.radiation} UV</h3>
                <h3 style={{color:'#E2C044'}}> Humidity: {extReadings.humidity}%</h3>
            </STabPanel>
        </STabs>
        </Container>
    );
}

export default DataReadings;