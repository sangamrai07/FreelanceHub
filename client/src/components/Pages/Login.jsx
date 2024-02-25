import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/Login.scss';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setFormError({ ...formError, username: '' });
    setLoginError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormError({ ...formError, password: '' });
    setLoginError('');
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!username) {
    setFormError({ ...formError, username: 'Username is required' });
    return;
  }
  if (!password) {
    setFormError({ ...formError, password: 'Password is required' });
    return;
  }
  try {
    const res = await axios.post("http://localhost:3001/server/auth/login", {
      username,
      password,
    }, { withCredentials: true });
    localStorage.setItem("activeUser", JSON.stringify(res.data));
    navigate("/");
  } catch (err) {
    if (err.response && err.response.status === 400) {
      setLoginError("Incorrect password. Please Try Again");
    } else {
      setLoginError("Username doesn't exist.");
      console.error(err);
    }
  }
};


  return (
    <>
      <div className="login">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-elements">
              <input
                name='username'
                type="text"
                placeholder='Username'
                value={username}
                onChange={handleUsernameChange}
                required
              />
              <i className='bx bx-user-circle'></i>
              {formError.username && <p className="error-message">{formError.username}</p>}
            </div>
            <div className="input-elements">
              <input
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <i className='bx bx-lock-alt'></i>
              {formError.password && <p className="error-message">{formError.password}</p>}
            </div>
            <div className="remember">
              <button
                type="button"
                onClick={handleTogglePassword}
                className="toggle-password-button"
              >
                {showPassword ? 'Hide' : 'Show'} Password
              </button>
            </div>
            {loginError && <p className="error-message">{loginError}</p>}
            <button type='submit' className='button'>Log In</button>
            <div className="register">
              <p>Don't have an account?<Link to="/signup">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
