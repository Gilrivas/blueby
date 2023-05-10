import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('USER_TOKEN');
        setUserToken(token);
        setIsLoading(false);
      } catch (error) {
        console.error('Error retrieving token:', error);
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  const login = async (email, password) => {
    const data = {
      email: email,
      password: password
    };

    const response = await fetch('http://192.168.1.34:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const { token } = await response.json();
      await AsyncStorage.setItem('USER_TOKEN', token);
      setUserToken(token);
    } else {
      const errorMessage = await response.text();
      console.error(errorMessage);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('USER_TOKEN');
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
