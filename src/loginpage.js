import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function LoginPage({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can implement your login logic
    console.log('Logging in with username:', username, 'and password:', password);
    // For a real application, you would typically send a request to your server to authenticate the user
    // For simplicity, let's assume successful login
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default LoginPage;
