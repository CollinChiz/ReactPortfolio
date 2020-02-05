import React from "react";
import "./style.css"
import {Col, Row } from "../Grid";

export default function Footer(props) {
    return (
        
        <footer className="dark">
            <Row>
                <Col size="md-2"><br></br>Contact Information: </Col>
                <Col size="md-2">
                    <address>
                        <br></br>
                        <a href="mailto: cwchiz16@gmail.com"> cwchiz16@gmail.com</a>
                        <br></br>
                        <a href="tel: 8016434908">(801)643-4908</a>
                    </address>
                </Col>
                <Col size="md-4">
                    <br></br>
                    <br></br>
                &#169; Copyright 2020

                </Col>
                <Col size="md-3">
                    <br></br>
                <p>Posted by: Collin Chisholm</p>
                </Col>
            </Row>
        </footer>
        
    )
}