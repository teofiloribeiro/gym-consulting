import React, { Component } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import LoginCard from '../components/LoginCard';
import { Redirect } from 'react-router-dom';



export default class Login extends Component {
    state = {
        user: '',
        password: '',
        gotoStartPage: false
    };

    onUserHandleChange = (event: any) => {
        this.setState({ user: event.target.value });
        console.log(this.state)
    }

    onPasswordHandleChange = (event: any) => {
        this.setState({ password: event.target.value });
        console.log(this.state)
    }

    onSubmit = () => {
        this.setState({ gotoStartPage: true });
    }

    render() {
        if (this.state.gotoStartPage) {
            return <Redirect to="/start_menu" />
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
                        <LoginCard user={this.state.user} password={this.state.password}
                            onUserHandleChange={this.onUserHandleChange}
                            onPasswordHandleChange={this.onPasswordHandleChange}
                            onSubmit={this.onSubmit} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}