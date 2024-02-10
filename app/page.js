"use client";
import React from 'react';

function LoginPage() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here

    // Redirect to home screen
    window.location.href = '/homescreen';
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Login Page</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="username">Username:</label>
          <br />
          <input type="text" id="username" name="username" />
          <br />

          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password" />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
