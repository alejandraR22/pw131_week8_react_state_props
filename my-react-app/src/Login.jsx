import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      alert('Username and password are required.');
    } else {
      fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert('Sign-up successful. You can now log in.');
            setFormData({ username: '', password: '' }); 
          } else {
            alert('Sign-up failed. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const handleLogin = () => {
    if (formData.username.trim() === '' || formData.password.trim() === '') {
      alert('Username and password are required.');
    } else {
      fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      })
        .then((response) => {
          if (response.ok) {
            alert('Login successful. You are now logged in.');
          } else {
            alert('Login failed. Please check your credentials.');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

  