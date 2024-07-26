import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/user">User</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

