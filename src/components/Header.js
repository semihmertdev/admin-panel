import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 p-4">
      <nav>
        <ul className="flex justify-end space-x-4 text-white">
          {isAuthenticated ? (
            <>
              <li><Link to="/" className="hover:underline">Dashboard</Link></li>
              <li><button onClick={handleLogout} className="hover:underline">Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="hover:underline">Login</Link></li>
              <li><Link to="/register" className="hover:underline">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
