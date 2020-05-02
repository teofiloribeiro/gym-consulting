import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';

const initialState = {loggedIn: false}

export const AuthContext = createContext({} as firebase.User | null | undefined);

export const AuthProvider = (props : any) => {
    const { children } = props;
    const [user, setUser] = useState<firebase.User | null>();
    const [waiting, setWaiting] = useState(true);

    useEffect (() => {
        auth.onAuthStateChanged((resUser) => {
            
            setUser(resUser);
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

