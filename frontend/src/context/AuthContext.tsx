import React, { createContext, useContext, useState, ReactNode } from 'react';
import { loginUser, registerUser } from '../utils/api';

type User = {
  username: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  register: (username: string, password: string, email : string,   confirmPassword: string) => Promise<void>;
  login: (email : string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  const register = async (username: string, password: string, email : string,   confirmPassword: string) => {
    const data = await registerUser(username, password, email,   confirmPassword);
    if (!data) {
      throw new Error('Registration failed');
    }
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const login = async (email: string, password: string) => {
    const data = await loginUser(email, password);
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
