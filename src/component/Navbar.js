import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar-guest">
      <h2 onClick={() => navigate("/")}>Home</h2>
      <h2 onClick={() => navigate("/about")}>About Us</h2>
      <h2 onClick={() => navigate("/contact")}>Contact</h2>
      <h2 onClick={() => navigate("/general-login")}>Login</h2>
    </div>
  );
}

export default Navbar;
