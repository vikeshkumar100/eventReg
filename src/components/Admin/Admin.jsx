import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      const pwd = prompt("Enter password : ");
      if (pwd === "123") {
        setIsAuthenticated(true);  // Set authenticated state to true
      } else {
        alert("Wrong password");
        navigate('/');  // Redirect to home route if password is incorrect
      }
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, return null to prevent rendering
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div>Admin</div>
  );
}

export default Admin;
