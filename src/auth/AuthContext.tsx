import React, { useEffect, useState, createContext } from 'react';
import { authConfig } from '../firebase';

export const AuthContext = createContext({} as firebase.User | undefined);

export const AuthProvider = (props : any) => {
    const { children } = props;
    const [user, setUser] = useState<firebase.User>();
    const [waiting, setWaiting] = useState(false);

    useEffect (() => {
        authConfig.auth().onAuthStateChanged((user) => {
            
            setUser(user || undefined);
            setWaiting(false);
        })
    }, []);

    if(waiting){
        //TODO beautify this
        return <>LOADING....</>
    }

    return(
        <AuthContext.Provider value={ user }> { children } </AuthContext.Provider>
    )
    
}

