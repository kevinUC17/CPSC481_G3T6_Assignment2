import React, { useState } from 'react';
import './TwoFactorAuthentication.css';

const TwoFactorAuthentication = ({handleLoginSubmit}) => {
    const [authenticationCode, setAuthenticationCode] = useState("");

    const handleAuthentication = (event) => {
          if (authenticationCode === "123456") {
            event.preventDefault();
            handleLoginSubmit();
          } else {
            event.preventDefault();
            alert("Invalid Code, Please Try Again");
          }
        };

  return (
    <div className="popup-container">
      <h1>Two Factor Authentication</h1>
      <form className="popup-form">
          <div className="popup-group">
            <label>Please Enter Your 6 Digit Code</label>
            <input
              type="text"
              placeholder="Enter your access code"
              value={authenticationCode}
              onChange={(e) => setAuthenticationCode(e.target.value)}
              required
            />
          </div>
        <button type="submit" className="submit-button" onClick={handleAuthentication}>Verify</button>
      </form>
    </div>
  );
}

export default TwoFactorAuthentication;
