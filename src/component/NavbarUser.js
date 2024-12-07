import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function NavbarUser() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 onClick={() => navigate("/")}>Home</h2>
      <h2 onClick={() => navigate("/about")}>About Us</h2>
      <h2 onClick={() => navigate("/contact")}>Contact</h2>
      <h2 onClick={() => navigate("/")}>Logout</h2>
      <div className="navbar-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-user"></i>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default NavbarUser;
