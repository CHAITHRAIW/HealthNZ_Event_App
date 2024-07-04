// src/components/Common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="navbar">
      <Link to="/" className="active">Health NZ Events App</Link>
      <Link to="/events">Manage Events</Link>
      <Link to="/create-event">Publish Event</Link>
    </div>
  );
}

export default Header;
