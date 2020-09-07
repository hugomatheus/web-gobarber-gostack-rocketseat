import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@GoBarber:user');
    const token = localStorage.getItem('@GoBarber:token');
    if (user && token) {
      return { user: JSON.parse(user), token };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });
    const { user, token } = response.data;
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    localStorage.setItem('@GoBarber:token', token);
    setData({ user, token });
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
