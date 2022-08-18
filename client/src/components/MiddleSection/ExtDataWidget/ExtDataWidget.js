import React from 'react'
import styled from 'styled-components'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

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
width: 60px;
height: 15vh;
margin: 0px;
display: grid;
grid-template-columns: 2fr 1fr;
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

const ExtDataWidget = ({icon, text}) => {
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
    </Wrap>
  )
}

export default ExtDataWidget;