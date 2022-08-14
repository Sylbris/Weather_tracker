import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Nav = styled.div`
background: #15171c;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SideBarNav = styled.div`
background: #15171c;
width: 200px;
height: 100vh;
display: flex;
justify-content: flex-start;
position: fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 10;
`

const SideBarWrap = styled.div`
width: 100%;
`

const SideBarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`

const SideBarLabel = styled.span`
    margin-left: 16px;
`
const styledComponents = {Nav, NavIcon, SideBarNav, SideBarWrap, SideBarLink, SideBarLabel};

export default styledComponents;
