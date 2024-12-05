import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginRegistration.css';


function Registration() {
  const [isStaffRegister, setIsStaffRegister] = useState(false);
  const [password1, setPassWord1] = useState("");
  const [password2, setPassWord2] = useState("");
  const navigate = useNavigate();

  const toggleStaffRegisterType = () => {
    setIsStaffRegister((prevIsStaffRegister) => !prevIsStaffRegister);
  };

  const handlePasswordEntry = (event) => {
    if (password1 === password2) {
        alert('Registration Sucessful');
        navigate('/');
    } 
    else {
        alert('Password entry is incorrect. Please make sure both passwords are the same');
    }
  }


  return (
    <div className="main-container">
        
      <h1>
        {isStaffRegister ? "Staff Account Registration" : "Patient Account Registration"}
      </h1>
      <button onClick={toggleStaffRegisterType} className="toggle-button">
        {isStaffRegister ? "Switch to Patient Registration" : "Switch to Staff Registration"}
      </button> 
      <button onClick={() => navigate("/general-login")} className='toggle-button'>
        Login Account
      </button>

      <form className="main-form" onSubmit={handlePasswordEntry}>
        <div className="form-group">
          <label>Enter Username</label>
          <input type="text" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label>Enter Password</label>
          <input type="password" 
            value={password1}
            onChange={(e) => setPassWord1(e.target.value)}
          placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <label>Re-Enter Password</label>
          <input type="password" 
            value={password2}
            onChange={(e) => setPassWord2(e.target.value)}
          placeholder="Re-Enter your password" required />
        </div>    
          <div className='form-group'>
            <label>Enter Phone Number</label>
              <input 
                type='text'
                placeholder='Enter your phone number'
                required
              />
          </div>
          {/* Staff Registration Will have a prompt for thier access code */}
          {isStaffRegister && (
          <div className="form-group">
            <label>Enter Your Issued Access Code</label>
            <input
              type="text"
              placeholder="Enter your issued access code"
              required
            />
          </div>
        )}

        <button type="submit" className="submit-button">Register Account</button>
      </form>
    </div>
  );
}

export default Registration;
