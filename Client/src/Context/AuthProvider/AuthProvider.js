import React, { createContext } from 'react';
import useFunctions from '../../Hooks/useFunctions.js'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFunctions();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;