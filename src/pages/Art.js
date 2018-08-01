import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import {Card, CardTitle} from "react-materialize";
import "./Art.css";
import Poetry from "./images/poetry.jpg";

class Art extends Component{
    render(){
        return(
            <div>
                <Navbar />
            
                    <Row>
                        <Col l = {12}>
                            <h1 className = "art-header">My Art</h1>
                        </Col>
                    </Row>
                    <hr width = "75%"/>
                    <Row>
                        <Col l = {12}>
                            <p className = "art-p">My creative spirit has led me to many avenues.  I find myself trying to be involved in creation whether it be a new website,
                            a new web-based application, a new novel, a new painting, or a new poem.  I love to be able to showcase all of my creations regardless of medium.  This section 
                            will be constantly updated so be sure to keep looking!</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col l = {5}>
                            <Card header={<CardTitle reveal image={Poetry} waves='light'/>}
                            title="Poetry By David Rausch" 
                            reveal={<p className = "art-p-reveal">Poetry has always been something I'm passionate about. Whether cryptic or blunt, I find that poetry is a wonderful outlet for expressing deep feelings and fears.</p>}>
                            <p><a href="https://drbuck10.tumblr.com" target = "_blank">A Link To My Poetry</a></p>
                            </Card>
                        </Col>
                    </Row>
                    <Row></Row>
                    <br />
                    <Row></Row>
                    <br />
                    <Row></Row>
                    <Row></Row>
                    <br />
                    <Row></Row>
                    <Row></Row>
                    <br />
                    <Row></Row>
                <Footer />
            </div>
        );
    };
};

export default Art;