import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../firebase';
import { User } from '../interfaces/User';
import { findUserById } from './AuthService';


export const AuthContext = createContext({} as User | null | undefined);

export const AuthProvider = (props : any) => {
    const { children } = props;
    const [user, setUser] = useState<User | null>();
    const [waiting, setWaiting] = useState(true);

    useEffect (() => {
        auth.onAuthStateChanged(async (resUser)  => {
            
            if(resUser) {   
                const userData = await findUserById(resUser?.uid);
                console.log("from context", userData)
                setUser(userData);
            }else {
                setUser(null)
            }
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

