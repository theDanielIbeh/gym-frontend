class AuthService {
    async login(email: string, password: string): Promise<void> {
      try {
        // Replace this with your actual login API call
        const response = await fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login Failed');
        }
  
        const data = await response.json();
        localStorage.setItem('user', data.user)
        localStorage.setItem('token', data.token);
        
      } catch (error) {
        console.error(error);
        throw error; 
      }
    }
  
    logout(): void {
        // Clear token from local storage
        localStorage.removeItem('token');
        
      }
    
      getToken(): string | null {
        return localStorage.getItem('token');
      }
    
      isAuthenticated(): boolean {
        return !!this.getToken();
      }
  }
  
  export const authService = new AuthService();
  