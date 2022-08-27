import React from 'react'
import { FaCalendarTimes, FaRuler, FaSignal, FaUser } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
display: grid;
grid-template-rows: 15px 15px 15px 15px;
row-gap: 5px;
align-items: left;
justify-content: left;
width: 200px;
height: 15vh;
color: white;
font-family: Lucida Console;
`
const DataParameters = ( {Range, Status, LastUpdated, Updatedby}) => {
  return (
      <Container>
        <p><FaRuler /> {Range}</p>
        <p><FaSignal /> {Status}</p>
        <p><FaCalendarTimes /> {LastUpdated}</p>
        <p><FaUser /> {Updatedby}</p>
      </ Container>
  )
}

export default DataParameters