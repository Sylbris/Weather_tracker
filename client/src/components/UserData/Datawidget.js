import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import DataParameters from './DataParameters'

const Wrap = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0;
margin: 0;
width: 200px;
height: 15vh;
`
const Container = styled.div`
background: #14121b;
width: 80px;
height: 15vh;
margin: 10px;
display: grid;
grid-template-rows: 2fr 1fr;
align-items: center;
justify-content: center;
`
const NavIcon = styled.div`
color: white;
font-size: 2rem;
margin: 5px 0 0 0;
`

const Text = styled.div`
color: white;
font-family: Arial;
`

const Datawidget = ({icon, text}) => {
    const currentTime = new Date();
    const time = currentTime.getDate();
  return (
      <Wrap>
        <Container>
            <NavIcon>
                {icon}
            </NavIcon>
            <Text>
                <h3>{text}</h3>
            </Text>
        </Container>
        <DataParameters Range="20-27" Status="Normal" LastUpdated={time} Updatedby="Dan Davidov"/>
    </Wrap>
  )
}

export default Datawidget