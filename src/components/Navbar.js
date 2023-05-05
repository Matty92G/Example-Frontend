import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/scoreboard" className="navbar-link">
          ScoreBoardList
        </Link>
      </nav>
    );
  }
}