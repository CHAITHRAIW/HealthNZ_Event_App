// src/components/Common/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="navbar">
      <Link to="/" className="active">Event App</Link>
      <Link to="/events">Events</Link>
      <Link to="/create-event">Create Event</Link>
      <Link to="/show-event">Show Event</Link>
    </div>
  );
}

export default Header;
