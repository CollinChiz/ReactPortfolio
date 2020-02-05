import React from "react";
import Grid, { Container, Row, Col } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import picture from "../../images/IMG_5847.JPG";
import Footer from "../../components/Footer";
import "./style.css";


export default function About() {
    
    return (
        <>
        <Container>
            <Row>
                <Col className="biography" size="md-12">
                    <h1 className="text-uppercase">Biography</h1>
                </Col>
            </Row>
            <section>

                <img src={picture} alt="Collin Chisholm" name="auth-img" className="authimg"/>

                    <p className="biography">
                        My name is Collin Chisholm, I am 18 years old and I was born on February 11, 2001. I was born and raised in Salt Lake City Utah, I attended Layton High School and was apart of the 2019 graduating class.
                        My interests include coding, golf, football, basketball, baseball, and riding dirt bikes and motorcycles.
                        I worked for AT&T's retail store company called Prime Communications for eight months. Four of those months I was employed as a manager. I managed two stores over the course of 4 months.
                        I want to become an entrepreneur but my dream job would be a PGA tour player.
                    </p>

            </section>
            <br></br>
        </Container>
        <Footer />
        </>
    );
}