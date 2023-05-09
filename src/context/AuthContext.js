import React, {createContext, useState} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    

    const login = async (email, password) => {
        const data = {
            email: email,
            password: password
          };

        
        const response = await fetch('http://192.168.1.34:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${authToken}`  
            },
            body: JSON.stringify(data)
          });
         
          if (response.ok) {
            console.log('ok')
            console.log(authToken);

            setUserToken(data.token);
            console.log(userToken);
            setIsLoading(false)

          } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
          }
        
        
    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false)
    }

    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    );
}

