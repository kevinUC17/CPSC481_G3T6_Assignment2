import React from 'react';
import './AboutUs.css';
import ClinicImage from '../assets/clinic-image.jpg';
import Doctor1Image from '../assets/doctor1.jpg';
import Doctor2Image from '../assets/doctor2.jpg';
import Doctor3Image from '../assets/doctor3.jpg';

function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="about-hero-section">
        <img src={ClinicImage} alt="Clinic" className="about-hero-image" />
        <h1>About Us</h1>
        <p>We are committed to providing quality healthcare with a compassionate approach.</p>
      </div>

      <div className="about-content">
        <h2>Our Mission</h2>
        <p>At SPCS Clinic, our mission is to improve the well-being of our community by providing accessible and comprehensive healthcare services. We believe in treating our patients with empathy and respect.</p>

        <h2>Our Services</h2>
        <ul>
          <li>General Checkups</li>
          <li>Pediatric Care</li>
          <li>Orthopedic Services</li>
          <li>Cardiology Consultations</li>
        </ul>

        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-card">
            <img src={Doctor1Image} alt="Dr. John" className="team-image" />
            <h3>Dr. John</h3>
            <p>Orthopedic Surgeon with over 20 years of experience specializing in sports medicine and joint replacement.</p>
          </div>
          <div className="team-card">
            <img src={Doctor2Image} alt="Dr. Andrew" className="team-image" />
            <h3>Dr. Andrew</h3>
            <p>Dermatologist specializing in cosmetic dermatology and skin cancer treatment, with 15 years of experience.</p>
          </div>
          <div className="team-card">
            <img src={Doctor3Image} alt="Dr. Angela" className="team-image" />
            <h3>Dr. Angela</h3>
            <p>Cardiologist with 15 years of experience specializing in international cardiology and advanced procedures.</p>
          </div>
        </div>
        <p>Our dedicated team of experienced healthcare professionals are here to provide you with the best possible care.</p>
      </div>
    </div>
  );
}

export default AboutUs;
