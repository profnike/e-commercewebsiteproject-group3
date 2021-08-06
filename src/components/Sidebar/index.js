import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElement'; 
import {Link } from "react-router-dom"
import './sidebar.css'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick = {toggle}>
            <Icon onClick= {toggle}>
               <CloseIcon /> 
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link to="/about" className="sidebar" onClick = {toggle}>
                        About
                    </Link>
                    <Link to="/new-arrivals" className="sidebar" onClick = {toggle}>
                       Shop
                    </Link>
                   
                          <Link to="/services" className="sidebar" onClick = {toggle}
                          >Services</Link>
                       
                       
                    <Link to="/contact" className="sidebar" onClick = {toggle}>
                       Contact Us
                    </Link>
                    
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signup'> Sign Up</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
