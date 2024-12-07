import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TwoFactorAuthentication from './TwoFactorAuthentication';
import './LoginRegistration.css';


function Login() {
  const [isStaffLogin, setIsStaffLogin] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const toggleLoginType = () => {
    setIsStaffLogin((prevIsStaffLogin) => !prevIsStaffLogin);
  };
  
  
  const handlePopup = (event) => {
    event.preventDefault();
    setShowPopup(true); 
  };

  const handleLoginSubmit = (event) => {
    // if(isVerified === true) {
      if (isStaffLogin) {
        if (accessCode === "123") {
          navigate('/doctor');
        } else if (accessCode === "321") {
          navigate('/nurse');
        } else {
          alert("Invalid access code for staff. Please try again.");
        }
      } else {
        navigate('/patient');
      }
    //}
  };

  return (
    <div className="main-container">
      <h1>{isStaffLogin ? "Staff Login" : "General Login"}</h1>
      <button onClick={toggleLoginType} className="toggle-button">
        {isStaffLogin ? "Switch to General Login" : "Switch to Staff Login"}
      </button>
      <button onClick={() => navigate("/registration")} className='toggle-button'>
        Register Account
      </button>

      <form className="main-form">
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        {isStaffLogin && (
          <div className="form-group">
            <label>Access Code</label>
            <input
              type="text"
              placeholder="Enter your access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              required
            />
          </div>
        )}
        <button type="submit" className="submit-button" onClick={handlePopup}>Submit</button>
        {showPopup && <TwoFactorAuthentication handleLoginSubmit={handleLoginSubmit}/>}
      </form>
    </div>
  );
}

export default Login;
