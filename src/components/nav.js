import React from 'react';
import { Link } from 'react-router-dom';
import '../style/App.css';

const Nav = () => (
  <nav>
    <h1>Math Magicians</h1>
    <ul className="nav-links">
      <Link to="/"> Home </Link>
      <Link to="/Calculator"> Calculator</Link>
      <Link to="/Quotes"> Quote</Link>

    </ul>
  </nav>
);
export default Nav;
