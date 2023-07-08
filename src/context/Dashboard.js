import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      {isLoggedIn ? (
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      ) : (
        <p>Please login to access the dashboard.</p>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
