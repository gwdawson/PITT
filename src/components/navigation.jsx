import React from 'react';
import { toast } from 'react-toastify';
import '../styles/Navigation.css';

const Navigation = () => {
  const handleUnavailable = (e, feat) => {
    e.preventDefault();
    toast.error(`The ${feat} feature is currently unavailable`);
  };

  return (
    <nav>
      <h1>Panintelligence</h1>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/" onClick={(e) => handleUnavailable(e, 'Flights')}>
            Flights
          </a>
          <a href="/" onClick={(e) => handleUnavailable(e, 'Hotels')}>
            Hotels
          </a>
        </li>
      </ul>
      <div>
        <button onClick={(e) => handleUnavailable(e, 'Login')}>Login</button>
        <button onClick={(e) => handleUnavailable(e, 'Create')}>Create</button>
      </div>
    </nav>
  );
};

export default Navigation;
