import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import styledComponents from './styles';
import { SidebarData } from './SideBarData';
import SubMenu from './SubMenu';

const Nav = styledComponents.Nav;
const NavIcon = styledComponents.NavIcon;
const SideBarNav = styledComponents.SideBarNav;
const SideBarWrap = styledComponents.SideBarWrap;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => {
    setSidebar(!sidebar);
  }

  return (
    <>

      <SideBarNav sidebar={sidebar}>
        <SideBarWrap>
          <NavIcon to="#">
            <AiIcons.AiOutlineClose onClick={showSideBar} />
          </NavIcon>
          {SidebarData.map((item, index)=> {
            return <SubMenu item={item} key={index}/>
          })}
        </SideBarWrap>
      </SideBarNav>
    </>
  )
}

export default Sidebar;