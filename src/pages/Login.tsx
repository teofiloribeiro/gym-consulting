import React, { useCallback, useContext, useState } from 'react'
import "./Login.scss"

import { Grid, Snackbar } from '@material-ui/core';
import LoginCard from '../components/LoginCard';
import { withRouter, Redirect } from 'react-router-dom';

import { login } from '../auth/AuthService';
import { AuthContext } from '../auth/AuthContext';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';


export const Login = withRouter(({ history }) => {
    const [openError, setOpenError] = useState(false);
    
    const onSubmit = useCallback(
        async (event: any) => {
            event.preventDefault();
            
            const { email, password } = event.target.elements;
            
            try{
                await login(email.value, password.value);
                history.push('/');
            }catch(error) {
                setOpenError(true)
                console.log("kkkk",error)
            }
        },
        [history]
    );

    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleClose = () => {
        setOpenError(false);
    };

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
                    <div>
                        <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
                            <Alert color="error">
                                Email / Senha Incorretos
                            </Alert>
                        </Snackbar>
                    </div>
                    <LoginCard onSubmit={(event: Event) => onSubmit(event)} />
                </Grid>
            </Grid>            
        </div>
    );

});

export default Login;