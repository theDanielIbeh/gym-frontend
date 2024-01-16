import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a public page accessible to everyone.</p>
      <Link to="/protected">Go to Protected Page</Link>
    </div>
  );
};

export default HomePage;
