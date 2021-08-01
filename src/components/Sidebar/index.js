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
                        New Arrivals
                    </Link>
                    <Link to="/services" className="sidebar" onClick = {toggle}>
                        Services
                    </Link>
                    <Link to="/signup" className="sidebar" onClick = {toggle}>
                        Sign Up
                    </Link>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
