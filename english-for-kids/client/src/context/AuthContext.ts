import { createContext } from 'react';

interface AuthData {
  token: string;
  userId: string;
  login: (jwtToken: string, id: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthData>({
  token: '',
  userId: '',
  login: () => { },
  logout: () => { },
  isAuthenticated: false,
});

export default AuthContext;
