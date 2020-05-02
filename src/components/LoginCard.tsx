import React from 'react';
import { Card, CardContent, Typography, Grid, TextField, Button } from '@material-ui/core';
import "./LoginCard.scss";
import { Link } from 'react-router-dom';

import logo from './assets/logo.png'


const LoginCard = (props: any) => {

    return (
        <Card >
            <CardContent className="cardContainer">
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Typography variant="h3" component="h2">
                        <img src={logo} alt="" />
                    </Typography>

                    <form className="loginForm" onSubmit={props.onSubmit}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center">
                            <TextField id="standard-basic" label="Usuário" className="input" name="email" />
                            <TextField id="standard-basic" label="Senha" className="input" name="password" type="password"/>
                            <Button variant="outlined" type="submit">Entrar</Button>
                        </Grid>
                    </form>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">

                        <Link to="/register" className="link">Cadastrar</Link>
                        <Link to="forgot_password" className="link">Esqueci minha senha</Link>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default LoginCard;
