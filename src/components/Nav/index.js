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
          <a className="nav-link" href="/about">
              About
          </a>
          <a className="nav-link" href="/portfolio">
                Portfolio
          </a>
          <a className="nav-link" href="/resume">
            Resume
          </a>
      </nav>
    )
}