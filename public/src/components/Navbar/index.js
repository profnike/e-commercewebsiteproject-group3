import React from 'react';
import {Nav, NavbarContainer,NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import {FaBars} from 'react-icons/fa';
import {Link } from "react-router-dom"

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> Zara House</NavLogo>
                    <MobileIcon onClick = {toggle}>
                      <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                          <Link to="/about" className="Linkers">About</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/new-arrivals" className="Linkers">Shop</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/services" className="Linkers">Services</Link>
                        </NavItem>
                        <NavItem>
                          <Link to="/signup" className="Linkers">Sign Up</Link>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to= "/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
