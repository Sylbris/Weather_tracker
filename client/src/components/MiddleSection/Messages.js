import React from 'react';
import styled from 'styled-components';
import Form from '../Messages/Form/Form';
import Message from '../Messages/Message/Message';
import { useSelector } from 'react-redux';

const Container = styled.div`
background: #15171c;
width: 88%;
height: 70vh;
align-items:center;
margin: 20px;
`

// const Message = styled.div`
// background: #ffeb99;
// width: 90%;
// height: 10vh;
// justify-content: center;
// margin: 5px;
// `


const Messages = () => {

    return (
        <Container>
            <Message>

            </Message>
            <Form>

            </Form>
        </Container>
    );
}

export default Messages;