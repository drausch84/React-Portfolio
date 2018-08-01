import React from "react";
import "./NavBar.css";
import Logo from "./portfolio-logo.jpg";
import { Navbar, NavItem} from 'react-materialize';

var logoImage = <img src = {Logo} className = "logo-img"/>

function Nav (){
  
return <Navbar  brand = {logoImage} right className = "sticky-nav">
  <NavItem  href = "/about-me">About Me</NavItem>
  <NavItem  href="/portfolio">Portfolio</NavItem>
  <NavItem  href = "/skills">Skills</NavItem>
  <NavItem href = "/art">My Art</NavItem>
  <NavItem  href = "/contact">Contact</NavItem>
</Navbar>
    };

export default Nav;