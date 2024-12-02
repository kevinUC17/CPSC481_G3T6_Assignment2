import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isStaffLogin, setIsStaffLogin] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const navigate = useNavigate();

  const toggleLoginType = () => {
    setIsStaffLogin((prevIsStaffLogin) => !prevIsStaffLogin);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
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
  };

  return (
    <div className="login-container">
      <h1>{isStaffLogin ? "Staff Login" : "General Login"}</h1>
      <button onClick={toggleLoginType} className="toggle-button">
        {isStaffLogin ? "Switch to General Login" : "Switch to Staff Login"}
      </button>
      <form className="login-form" onSubmit={handleLoginSubmit}>
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
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default Login;
