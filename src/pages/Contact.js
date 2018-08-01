import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import "./Contact.css";
import Superman from "./images/me-superman.jpg"
import HTML from "./images/html-icon.png";
import CSSIcon from "./images/css-icon.png";
import JS from "./images/js-icon.png";
import JQueryIcon from "./images/jquery-icon.png";
import API from "./images/api-icon.png";
import Express from "./images/express-js-icon.png";
import Git from "./images/git-icon.png";
import Github from "./images/github-icon.png";
import Gitlab from "./images/gitlab-icon.png";
import Handlebars from "./images/handlebars-icon.png";
import Heroku from "./images/heroku-icon.png";
import Mongo from "./images/mongo-icon.png";
import Mongoose from "./images/mongoose-icon.png";
import SQL from "./images/mysql-icon.png";
import NodeIcon from "./images/node-js-icon.png";
import ReactIcon from "./images/react-icon.png";
import ReduxIcon from "./images/redux-icon.png";
import Sequelize from "./images/sequelize-icon.png";


class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Row>
                    <Col l = {12}>
                        <h1 className = "Contact-Header">Contact Me</h1>
                    </Col>
                    <hr width = "75%" />
                </Row>
                <Row>
                    
                </Row>
                <Row>
                    <Col l = {2}></Col>
                    <Col l = {2}>
                        <img src = {Superman} alt = "superman" className = "superman-img" height = "450" width = "450"/>
                        <h6 className = "contact-p">Looking to fly high?  Needing a superhero developer?</h6> 
                    </Col>
                    <Col l = {3}></Col>
                    <Col l = {3}>
                    
                    </Col>
                    
                </Row>
                <Row>
                    <Col l = {2}></Col>
                    <Col l = {2}></Col>
                    <Col l = {2}></Col>
                    <Col l = {4}>
                    <h6 className = "contact-p">Whether a potential client looking to work together on creating a dynamic project or an employeer looking to add a 
                    developer to their team, feel free to leave me a message and I will respond ASAP.</h6>
                    <hr width = "50%" />
                        <div className = "icon-row" data-aos = "flip-up" data-aos-duration="2800">
                            <a href = "https://www.w3schools.com/htmL/" target = "_blank"><img src = {HTML} className = "d-icon"/></a>
                            <a href = "https://www.w3schools.com/css/default.asp" target = "_blank"><img src = {CSSIcon} className = "d-icon"/></a>
                            <a href = "https://www.w3schools.com/js/default.asp" target = "_blank"><img src = {JS} className = "d-icon"/></a>
                            <a href = "https://www.w3schools.com/jquery/default.asp" target = "_blank"><img src = {JQueryIcon} className = "d-icon"/></a>
                            <a href = "https://en.wikipedia.org/wiki/Application_programming_interface" target = "_blank"><img src = {API} className = "d-icon"/></a>
                            <a href = "https://expressjs.com" target = "_blank"><img src = {Express} className = "d-icon"/></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col l = {2}></Col>
                    <Col l = {2}></Col>
                    <Col l = {2}></Col>
                    <Col l = {4}>
                        <div className = "icon-row"  data-aos = "flip-up" data-aos-duration="2800">
                            <a href = "https://en.wikipedia.org/wiki/Git" target = "_blank"><img src = {Git} className = "d-icon"/></a>
                            <a href = "https://github.com" target = "_blank"><img src = {Github} className = "d-icon"/></a>
                            <a href = "https://about.gitlab.com" target = "_blank"><img src = {Gitlab} className = "d-icon"/></a>
                            <a href = "https://handlebarsjs.com/" target = "_blank"><img src = {Handlebars} className = "d-icon"/></a>
                            <a href = "https://en.wikipedia.org/wiki/Heroku" target = "_blank"><img src = {Heroku} className = "d-icon"/></a>
                            <a href = "https://www.mongodb.com/" target = "_blank"><img src = {Mongo} className = "d-icon"/></a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col l = {2}></Col>
                    <Col l = {2}></Col>
                    <Col l = {2}></Col>
                    <Col l = {4}>
                        <div className = "icon-row"  data-aos = "flip-up" data-aos-duration="2800">
                            <a href = "http://mongoosejs.com" target = "_blank"><img src = {Mongoose} className = "d-icon"/></a>
                            <a href = "https://www.mysql.com/" target = "_blank"><img src = {SQL} className = "d-icon"/></a>
                            <a href = "https://nodejs.org/en/" target = "_blank"><img src = {NodeIcon} className = "d-icon"/></a>
                            <a href = "https://reactjs.org" target = "_blank"><img src = {ReactIcon} className = "d-icon"/></a>
                            <a href = "https://redux.js.org/" target = "_blank"><img src = {ReduxIcon} className = "d-icon"/></a>
                            <a href = "http://docs.sequelizejs.com/" target = "_blank"><img src = {Sequelize} className = "d-icon"/></a>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col l = {12}>
                    <div className="form-container" data-aos = "zoom-in" data-aos-duration="2000">>
                    <form method="POST" action="https://formspree.io/rausch.david84@gmail.com">
                        <input type="email" name="email" className = "email" placeholder="Your email"/>
                        <input type = "subject" name = "subject" className = "subject" placeholder = "Subject"/>
                        <textarea name="message" className = "message"placeholder="Your message"></textarea>
                        <button type="submit" className = "submit-btn">Send</button>
                    </form>
                    </div>
                    </Col>
                </Row>
                <Row></Row>
                <br />
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <br />
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Row></Row>
                <Footer />
            </div>
        );
    };
};

export default Contact;