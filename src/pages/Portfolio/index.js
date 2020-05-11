import React from "react";
import {Col, Row, Container} from "../../components/Grid";
import "./style.css";
import picture from "../../images/fairwaypromotionsScreenshot.png"

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
            <Row>
                <Col size="lg-4 md-6">
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
                <Col size="lg-4 md-6">
                    <div className="card">
                        <img src={picture} alt="Fairway Promotions, Inc."/>

                        <div className="card-body">
                            <h1 className="card-title">Fairway Promotions, Inc.</h1>

                            <p className="card-text">
                                Fairway Promotions, Inc. is a small company that focuses on selling promotional tech products to companies to promote their business. Right now Fairway Promotions, Inc. has one product you can purchase right now! Ecommerce made with stripe api.
                            </p>

                            <a href="https://fairwaypromotionsinc.com" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
                <Col size="lg-4 md-6">
                    <div className="card">
                        <img src="https://media.giphy.com/media/Z9JpD7Dx7mwEfdiNs4/giphy.gif" alt="Golf Trivia"/>
                        <div className="card-body">
                            <h1 className="card-title">Golf Trivia</h1>

                            <p className="card-text">
                                Golf Trivia is a quick 10 question trivia game on the topic of rules in golf. Play the game to find out how much you know!
                            </p>
                            <br></br>
                            <br></br>
                            <a href="https://collinchiz.github.io/TriviaGame/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
                <Col size="lg-4 md-6">
                    <div className="card">
                    <img src="https://media.giphy.com/media/7E8lI6TkLrvvAcPXso/giphy.gif" alt="library"/>
                        <div className="card-body">
                            <h1 className="card-title">Google Book Search</h1>

                            <p className="card-text">
                                Google Book Search is an app that uses google's books api to search for a book by title and or author. Google Book Search uses mongodb to save a book in case you want to add that book to a reading list!
                            </p>
                            
                            <a href="https://google-api-booksearch.herokuapp.com/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
                <Col size="lg-4 md-6">
                <div className="card">
                    <img src="https://media.giphy.com/media/k481R5ERN7jJm/giphy.gif" alt="giphy page"/>
                        <div className="card-body">
                            <h1 className="card-title">GifTastic!</h1>

                            <p className="card-text">
                                GifTastic is a small application that allows you to make a button with a keyword that you input.
                                Clicking on that button will then give you the 10 most popular gifs related to that key word using giphy api.
                            </p>
                            
                            <a href="https://collinchiz.github.io/GifTastic/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
                <Col size="lg-4 md-6">
                <div className="card">
                    <img src="https://media.giphy.com/media/lELRD773cY7Sg/giphy.gif" alt="Word Guess"/>
                        <div className="card-body">
                            <h1 className="card-title">Psychic Game!</h1>

                            <p className="card-text">
                                Psychic game is a small game where the objective is to guess what letter the computer is thinking of. You have 9 attempts to guess correctly. Are you psychic?
                            </p>
                            
                            <a href="https://collinchiz.github.io/psychic-game/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">VISIT SITE</a>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}