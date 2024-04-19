import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function SignupPage({ isLoggedIn, setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Here you can implement your signup logic
    console.log('Signing up with username:', username, 'and password:', password);
    // For a real application, you would typically send a request to your server to create a new user
    // For simplicity, let's assume successful signup
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
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
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignupPage;
