import React, {Component} from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {Col, Row} from "react-materialize";
import "./About.css";
import Certificate from "./images/DUcertificate.png";
import BoothFalls from "./images/Booth Falls.jpg";
import Causeway from "./images/Devil's Causeway.jpg";
import GOG from "./images/Garden Of Gods.jpg";
import Hike from "./images/Hike.jpg";
import Incline from "./images/incline.jpg";
import Loveland from "./images/loveland.jpg";
import PLT from "./images/PLT.jpg";
import Kayak from "./images/kayak.jpg";

class About extends Component{
    render(){
        return(
            <div>
                <Navbar />
                
               
            <Row>
                <Col l = {12}>
                    <h1 className = "about-header">About Me</h1>
                </Col>
            </Row>
            <hr width = "75%" />
            <Row>
                <Col l = {12}>
                <p className = "about-me">My name is David Rausch, and I am a full-stack web developer.  Ever since I was a child, I always felt
                    that my mind would frequently wander(constantly daydreaming about a new painting I would want to create or a new book I would
                    want to start writing).  This creative spirit has led me to national writing workshops, a brief art career, as well as many other 
                    adventures.  It's also what led me to a love of code.  The marriage between logic and creativity instantly grabbed my attention when
                    I began to learn about coding independently(introducing myself to C++ and Java).  Independent learning wasn't enough and I enrolled
                    into Regis University in Denver, CO to obtain my BS degree in Computer Science and will tentatively graduate in the fall of 2019.  My desire
                    to learn more about the world of coding couldn't be contained to a college degree, however. I felt that the curriculum at Regis University didn't focus much on 
                    programming, which is my primary interest.  So I attended and graduated with an A average from the University of Denver's Coding Boot Camp on 
                    July 12, 2018.  </p>
                </Col>
            </Row> 
            <br />
            <Row></Row>
            <Row>
                <Col l = {12}>
                    <div className = "hover-gray">
                        <figure>
                            <img src = {Certificate} className = "du-certificate"/>
                        </figure>
                        <span className = "certificate-caption"> My Certificate of Completion</span>
                    </div>    
                </Col>
            </Row>
            <br />     
            <Row></Row>
            <br />
            <Row>
                <Col l = {12}>
                    <p className = "about-me">By attending this Boot Camp I was familiarized with most languages, frameworks, etc. to move toward a career
                    in web design and web-based application development.  I find myself very capable to program full stack applications, but find myself gravitating
                    toward design and dynamism that front-end development provides.</p>
                </Col>    
            </Row>          
            <Row>
                <Col l = {12}>
                    <p className = "about-me">It's been about 8 years since I made one of the best decisions I've ever made; moving to Colorado.
                    I grew up as a military brat and was enlisted in the USAF for an 8 year enlistment as well(primarily stationed on the East Coast).
                    I always dreamed of moving West and the Rocky Mountains are a big reason why.  During the summer, I rarely spend a weekend inside and am
                    constantly searching out new displays of beauty that only the outdoors of Colorado can provide:</p>        
                </Col>
            </Row>
            <br />
            
            <Row>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {BoothFalls}/>
                            <div className = "title">
                                <div>
                                    <h5>Booth Falls</h5>
                                    <h6> Vail, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">At the top of the falls with my sister and friend</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
                <Col s = {1}></Col>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {Causeway}/>
                            <div className = "title">
                                <div>
                                    <h5>Devil's Causeway</h5>
                                    <h6> Yampa, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">Incredible views after an intense incline and a battle with vertigo</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
                <Col s = {1}></Col>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {GOG}/>
                            <div className = "title">
                                <div>
                                    <h5>Garden of the Gods</h5>
                                    <h6> Colorado Springs, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">Enjoying the snowy majesty with my wife and brother-in-law</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
                <Col s = {1}></Col>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {Hike}/>
                            <div className = "title">
                                <div>
                                    <h5>Turkey Trot Trail</h5>
                                    <h6> Morrison, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">Enjoying a hike with some friends</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
            </Row>
            <br />
            <Row>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {Incline}/>
                            <div className = "title">
                                <div>
                                    <h5>The Incline</h5>
                                    <h6> Manitou Springs, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">Gotta do The Incline to be initiated to Colorado</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>    
                </Col>
                <Col s = {1}></Col>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {Loveland}/>
                            <div className = "title">
                                <div>
                                    <h5>Sheep Mountain Trail</h5>
                                    <h6>Loveland, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">T-shirt and shorts = winter hiking attire</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
                <Col s = {1}></Col>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {PLT}/>
                            <div className = "title">
                                <div>
                                    <h5>Pitkin Lake Trail</h5>
                                    <h6> Vail, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">I might be smiling, but my body was destroyed on this hike!</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
                <Col s = {1}></Col>
                <Col s = {2}>
                    <figure className = "outdoor-pic">
                        <img src = {Kayak}/>
                            <div className = "title">
                                <div>
                                    <h5>BigHorn Canyon</h5>
                                    <h6> Cotopaxi, CO</h6>
                                </div>
                            </div>
                            <figcaption>
                                <p className = "pic-p">Hitting the rapids with enthusiasm and madness!</p>
                            </figcaption>
                            <a href = "#"></a>
                    </figure>
                </Col>
            </Row>
            <br />
            <Row>
            </Row>
            <br />
            <Row>
            </Row>
            <br />
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
           
                <Footer />
            </div>
        )
    }
}

export default About;