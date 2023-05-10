import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/scoreboard/flappy" className="navbar-link">
          Flappy ScoreBoardList
        </Link>
        <Link to="/scoreboard/run" className="navbar-link">
          Run ScoreBoardList
        </Link>
      </nav>
    );
  }
}
