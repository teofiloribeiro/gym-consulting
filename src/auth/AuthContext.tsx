import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext({} as firebase.User | undefined);

export const AuthProvider = (props : any) => {
    const { children } = props;
    const [user, setUser] = useState<firebase.User>();
    const [waiting, setWaiting] = useState(false);

    useEffect (() => {
        auth.onAuthStateChanged((user) => {
            
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

