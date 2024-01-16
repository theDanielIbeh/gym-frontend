const APP_URL = import.meta.env.VITE_REACT_APP_URL
import axios from 'axios';

console.log(APP_URL);

const authenticate = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await axios.post(`${APP_URL}/auth/login`, {

         email, password 
      });


      return response.data
      
    } catch (error) {
      console.error('There was a problem with the fetch operation: ', error);
      return false;
    }
  };
  
  export const AuthService = {
    authenticate,
  };
  