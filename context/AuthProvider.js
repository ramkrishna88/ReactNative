import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user data from AsyncStorage on app startup
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData');
      if (userData) {
        setUser(JSON.parse(userData));
        console.log('AsyncStorage Data:', userData);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const login = async userData => {
    // Implement your login logic, set user data and save to AsyncStorage
    setUser(userData);

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const logout = async () => {
    // Implement your logout logic
    setUser(null);
  };

  const updateUser = updatedUser => {
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{user, login, logout, updateUser}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
