import React from "react";
import {Col, Row, Container} from "../../components/Grid";
import "./style.css";

export default function Portfolio() {

    return (
        <>
        <Container>
            <Row>
                <Col size="md-12">
                    <div className="title">
                        <h1 className="text-uppercase">Portfolio</h1>
                    </div>
                </Col>
            </Row>
                   <p className="warning"> site down until 2/7/2020 </p>
                   <p className="">this site is being re-deployed in react.js!</p>
            <Row>
                <Col size="md-4 sm-6">
                    <div className="card">
                        <img src="https://media.giphy.com/media/8rEB2xzZcZDnBegHFS/giphy.gif" alt="Whats In My Pantry"/>

                        <div className="card-body">
                            <h1 className="card-title">Whats In My Pantry</h1>

                            <p className="card-text">
                                "Whats In My Pantry" is an application that allows you to input ingredients you have in your Pantry
                                and it will generate recipes that you can make with those ingredients. This is perfect if you are trying to save money and need to use what you have!
                            </p>

                            <a href="http://whats-in-my-pantry.herokuapp.com" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
                <Col size="md-4 sm-6">
                    <div className="card">
                        <img src="https://media.giphy.com/media/Z9JpD7Dx7mwEfdiNs4/giphy.gif" alt="Golf Trivia"/>
                        <div className="card-body">
                            <h1 className="card-title">Golf Trivia</h1>

                            <p className="card-text">
                                Golf Trivia is a quick 5 question trivia game on the topic of golf. Play the game to find out how much you know!
                            </p>

                            <a href="https://collinchiz.github.io/TriviaGame/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
                <Col size="md-4 sm-6">
                    <div className="card">
                    <img src="https://media.giphy.com/media/k481R5ERN7jJm/giphy.gif" alt="Word Guess"/>
                        <div className="card-body">
                            <h1 className="card-title">GifTastic!</h1>

                            <p className="card-text">
                                GifTastic is a small application that allows you to make a button with a keyword that you input.
                                Clicking on that button will then give you 10 gifs related to that key word.
                            </p>
                            
                            <a href="https://collinchiz.github.io/GifTastic/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}