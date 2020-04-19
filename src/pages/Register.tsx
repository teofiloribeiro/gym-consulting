
import React, { Component } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import RegisterCard from '../components/RegisterCard';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    state = {
        name: '',
        email: '',
        user: '',
        password: '',
        gotoStartPage: false
    };

    onNameHandleChange = (event: any) => {
        this.setState({ name: event.target.value });
        console.log(this.state)
    }

    onEmailHandleChange = (event: any) => {
        this.setState({ email: event.target.value });
        console.log(this.state)
    }

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
            return <Redirect to="/" />
        }
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className="cardContainer">
                <Grid item xs={12} md={6} lg={4} >
                    <RegisterCard name={this.state.name} email={this.state.email}
                        user={this.state.user} password={this.state.password}
                        onNameHandleChange={this.onNameHandleChange}
                        onEmailHandleChange={this.onEmailHandleChange}
                        onUserHandleChange={this.onUserHandleChange}
                        onPasswordHandleChange={this.onPasswordHandleChange}
                        onSubmit={this.onSubmit} />
                </Grid>
            </Grid>
        );
    }
}