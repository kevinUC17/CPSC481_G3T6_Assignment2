import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="hero-section">
        <div className="content">
          <h1>SPCS – Where Family Health Comes First.</h1>
          <p>A Clinic That Treats You Like Family.</p>
          <div className="cta-buttons">
            <button className="book-button" onClick={() => navigate("/general-login")}>
              Book A Doctor
            </button>
            <button className="call-button" onClick={() => navigate("/contact")}>
              Call Us <i className="fas fa-phone"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
