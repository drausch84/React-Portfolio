import React from "react";
import "./Footer.css";
import {Col, Row} from "react-materialize";
import Mail from "./email.png";
import Twitter from "./twitter.png";
import Linkedin from "./linkedin.png";
import Github from "./github.png";
import ScrollButton from "../ScrollButton";


function Footer(){
   return <footer className = "footer">
   <div>     
        <Row></Row>
        <Row>
        <Col s = {2}>
        </Col>    
         <Col s = {2}>
            <a href = "mailto:rausch.david84@gmail.com" target = "_blank"><img src = {Mail} className = "contact-icon" /></a>
         </Col>
         <Col s = {2} className = "contact-icon">
            <a href = "https://twitter.com/thedaverausch" target = "_blank"><img src = {Twitter} className = "contact-icon" /></a>
         </Col>
         <Col s = {2} className = "contact-icon">
            <a href = "https://www.linkedin.com/in/david-rausch-52444878/" target = "_blank"><img src = {Linkedin} className = "contact-icon" /></a>
         </Col>
         <Col s = {2} className = "contact-icon">
            <a href = "https://github.com/drausch84" target = "_blank"><img src = {Github} className = "contact-icon" /></a>
         </Col>
        
        </Row>
        
        <Row>
            <Col l = {12}>
              <span>  © 2018 David Rausch</span>
            </Col>
        </Row>      
        <Row>
            <Col l = {12}>
                <ScrollButton />
            </Col>
        </Row>
   </div>
   
    </footer>
};

export default Footer;