import React from 'react';
import './App.css';
import AuthProvider from './context/AuthContext';
import LoginForm from './context/LoginForm';
import Dashboard from './context/Dashboard';



function App() {
  return(
    <AuthProvider>
      <LoginForm />
      <Dashboard />
    </AuthProvider>
  )
}
export default App;
