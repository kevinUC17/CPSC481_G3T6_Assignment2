import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarUser.css';

function NavbarUserHome() {
  const navigate = useNavigate();

  return (
    <div className="navbar-user">
      <h2></h2>
      <h2 onClick={() => navigate("/")}>Logout</h2>
    </div>
  );
}

export default NavbarUserHome;
