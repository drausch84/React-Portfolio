import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import BarGraph from "../components/BarGraph";
import "./Skills.css";

class Skills extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Row>
                    <Col l = {12}>
                        <h1 className = "skills-header">Skills</h1>
                    </Col>
                    <hr width = "75%" />
                </Row>
                <Row>
                    <Col l = {12}>
                    <h2 className = "dev-skills">Development Skills</h2>
                    <p className = "dev-p">NOTE: This chart is merely a guideline of my skills as I am constantly updating my knowledge daily</p>
                    </Col>
                </Row>
                <Row>
                   <Col l = {2}></Col>
                    <Col l = {6}>
                        <div className = "barChart" data-aos = "zoom-out" data-aos-duration="2000">
                            <BarGraph />
                        </div>
                    </Col>
                    <Col l = {2}></Col>
                    
                </Row>
                <Row></Row>
                <Row>
                    <Col l = {4}>
                        <h4 className = "front-end-skills">Front End</h4>
                            <ul className = "a">
                                <li data-aos = "flip-up" data-aos-duration="1800">Bootstrap CSS</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">Materialize CSS</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">CSS 3</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">HTML 5</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">Javascript</li>
                            </ul>    
                    </Col>
                    <Col l = {4}>
                        <h4 className = "frameworks">Frameworks</h4>
                            <ul className = "a">
                                <li data-aos = "flip-up" data-aos-duration="1800">ReactJS</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">Redux</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">jQuery</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">Laravel</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">HandlebarsJS</li>
                            </ul>
                    </Col>
                    <Col l = {4}>
                        <h4 className = "backend">Back End</h4>
                            <ul className = "a">
                            <li data-aos = "flip-up" data-aos-duration="1800">MongoDB</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">Mongoose</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">MySQL</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">Sequelize</li>
                                <li data-aos = "flip-up" data-aos-duration="1800">NodeJS</li>
                            </ul>
                    </Col>
                </Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Row></Row>
                <Row></Row>
                <br />
                <Footer />
            </div>
        );
    };
};

export default Skills;