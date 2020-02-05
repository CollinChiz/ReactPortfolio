import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = "/" component={About} />
          <Route exact path = "/about" component={About} />
          <Route exact path = "/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    </Router>
        </>
  );
}

export default App;
