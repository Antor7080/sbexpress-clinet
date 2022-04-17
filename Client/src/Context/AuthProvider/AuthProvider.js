import React, { createContext, useState } from 'react';
import useFunctions from '../../Hooks/useFunctions.js'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const allContext = useFunctions();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;