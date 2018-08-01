import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Code from "../components/Code";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LeftBrain from "../components/LeftBrain";
import RightBrain from "../components/RightBrain";
import {Col, Row} from "react-materialize";

class Home extends Component{
    render(){
        return (
           <div>
            <Navbar />
            <Row>
                <Col l = {12}>
                    <Hero />
                </Col>
            </Row>    
            <hr width = "50%"/>
            <Row>
                <Col l = {12}>
                     <Header />
                </Col>  
            </Row>
            <hr width = "75%" />
            <Row>
                <Col l = {2}>
                </Col>
                <Col l = {3}>
                    <LeftBrain />
                </Col>
                <Col l = {2}>
                    <Code /> 
                </Col>  
                <Col l = {3}>
                    <RightBrain />
                </Col>
                <Col l = {2}>
                </Col>  
            </Row>    
            <br />
            <br />
            <Row>
                <Col l = {5}>

                </Col>
            </Row>  
                <Footer />
            </div>

        );
    };
};

export default Home;