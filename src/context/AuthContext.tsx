
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, ClientProfile } from '@/types/user';

// Fake user data
const fakeUser: User = {
  id: '123456',
  email: 'test@bandit.com',
  name: 'Test User',
  role: 'client',
  createdAt: new Date().toISOString(),
};

const fakeClientProfile: ClientProfile = {
  id: 'profile123',
  userId: '123456',
  preferredGenres: ['Rock', 'Jazz', 'Pop'],
  location: 'New York',
};

interface AuthContextType {
  user: User | null;
  profile: ClientProfile | null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ClientProfile | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedProfile = localStorage.getItem('userProfile');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Check credentials against fake user
    if (email === 'test@bandit.com' && password === 'password123') {
      // Set user in state and localStorage
      setUser(fakeUser);
      setProfile(fakeClientProfile);
      setIsLoggedIn(true);
      
      localStorage.setItem('user', JSON.stringify(fakeUser));
      localStorage.setItem('userProfile', JSON.stringify(fakeClientProfile));
      
      return true;
    }
    return false;
  };

  const logout = () => {
    // Clear user data
    setUser(null);
    setProfile(null);
    setIsLoggedIn(false);
    
    localStorage.removeItem('user');
    localStorage.removeItem('userProfile');
  };

  return (
    <AuthContext.Provider value={{ user, profile, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
