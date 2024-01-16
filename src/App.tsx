import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedPage';
import ProtectedRoute from './pages/ProtectedRoutes'; 
import { AuthProvider } from './context/AuthContext'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/protected" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
        </Routes>
      </Router>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
