import React, {Component} from "react";
import {Col, Row} from "react-materialize";
import "./404.css";
import ErrorImg from "./images/404-image.jpg";

class PageNotFound extends Component{
    render(){
        return (
            <div className = "error-div">
               
                        <img src = {ErrorImg} alt = "error-img" className = "error-img" />
                
                <Row>
                    <Col l = {12}>
                        <h3 className = "redirect">Or you can just click <a href = "/">Here</a> and you'll be redirected to the home page</h3>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PageNotFound;