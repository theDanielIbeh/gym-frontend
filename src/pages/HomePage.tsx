import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authService } from '../services/AuthService';

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await authService.logout();
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out');
    }
  };
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is a public page accessible to everyone.</p>
      <Link to="/protected">Go to Protected Page</Link>

      <div>
                    <button
                      type="submit"
                      onClick={handleLogout}

                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Out
                    </button>
                  </div>
    </div>
  );
};

export default HomePage;
