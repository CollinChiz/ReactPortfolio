import React from "react";
import "./style.css"

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Collin Chisholm
      </a>
      <div id="navbarSupportedContent">
        <ul className="nav navbar-nav navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}