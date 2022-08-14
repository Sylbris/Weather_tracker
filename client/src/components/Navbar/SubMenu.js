import React from 'react'
import {Link} from 'react-router-dom'
import styledComponents from './styles';

const SideBarLink = styledComponents.SideBarLink;
const SideBarLabel = styledComponents.SideBarLabel;

const SubMenu = ({item}) => {
    return(
        <>
            <SideBarLink to={item.path}>
                <div>
                    {item.icon}
                    <SideBarLabel>{item.title}</SideBarLabel>
                </div>
            </SideBarLink>
        </>
    );
}

export default SubMenu;