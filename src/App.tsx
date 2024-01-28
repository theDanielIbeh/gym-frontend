import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import ProtectedRoute from './pages/ProtectedRoutes';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import Branches from './pages/Branches';


const App = () => {
  return (
      <Router>
             <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/" element={ <ProtectedRoute><HomePage /> </ProtectedRoute>}>
            <Route path='users' element={<UsersPage />}/>
            <Route path='branches' element={<Branches />}/>
          </Route>
      </Routes>
        <ToastContainer />
      </Router>
  );
};

export default App;
