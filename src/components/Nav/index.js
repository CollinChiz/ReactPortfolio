import React from "react";
import "./style.css"

export default function Nav() {

  const style = {
    
  }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Collin Chisholm
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

              <a className="nav-item nav-link active" href="/about">About <span className="sr-only"> (current) </span></a>
              <a className="nav-item nav-link" href="/portfolio">
                    Portfolio
              </a>
              <a className="nav-item nav-link" href="/resume">
                Resume
              </a>
            </div>

          </div>
      </nav>
    )
}