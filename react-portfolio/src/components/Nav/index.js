import React from "react";
import "./style.css"

export default function Nav() {

  const style = {
    margin: 0,
    top: 0,
    right: 60,
    bottom:20,
    left: 'auto',
    position: 'fixed',
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Collin Chisholm
      </a>
      <div id="navbarSupportedContent">
        <ul style={style} className="nav navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/portfolio">
                Portfolio
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}