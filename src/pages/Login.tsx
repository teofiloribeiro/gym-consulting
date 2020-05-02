import React, { useCallback, useContext } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import LoginCard from '../components/LoginCard';
import { withRouter, Redirect } from 'react-router-dom';

import { login } from '../auth/AuthService';
import { AuthContext } from '../auth/AuthContext';


export const Login = withRouter(({ history }) => {

    const onSubmit = useCallback(
        async (event: any) => {
            event.preventDefault();
            
            const { email, password } = event.target.elements;
            
            try{
                await login(email.value, password.value);
                history.push('/');
            }catch(error) {
                //TODO SHOW ERROR ON SCREEN
                console.log(error)
            }
        },
        [history]
    );   
    
    const auth  = useContext(AuthContext);

    if(auth){
        console.log(auth)
        return <Redirect to="/"/>
    }
    return (
        <div className="bg-login">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="cardContainer">
                <Grid item xs={12} md={6} lg={4} >
                    <LoginCard onSubmit={(event: Event) => onSubmit(event)} />
                </Grid>
            </Grid>
        </div>
    );

});

export default Login;