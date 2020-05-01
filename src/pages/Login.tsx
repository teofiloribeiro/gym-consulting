import React, { useCallback } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import LoginCard from '../components/LoginCard';
import { withRouter } from 'react-router-dom';

import { authConfig } from '../firebase';


export const Login = withRouter(({ history }) => {

    const onSubmit = useCallback(
        async (event: any) => {
            event.preventDefault();
            
            const { username, password } = event.target.elements;
            
            try{
                await authConfig.auth().signInWithEmailAndPassword(username.value, password.value);
                history.push('/');
            }catch(error) {
                //TODO SHOW ERROR ON SCREEN
                console.log(error)
            }
        },
        [history]
    );   

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