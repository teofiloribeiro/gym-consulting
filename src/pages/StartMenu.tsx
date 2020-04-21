import React, { Component } from 'react';
import StartMenuCard from '../components/StartMenuCard'
import { Redirect } from 'react-router-dom';


export default class StartMenu extends Component {
    state = {
        gotoDietPage: false,
        gotoTraningPage:false,
        gotoNutriPage:false,
        gotoMeasuresPage:false
    };

    onUserHandleChange = (event: any) => {
        this.setState({ user: event.target.value });
        console.log(this.state)
    }

    onSubmit = () => {
        this.setState({ gotoStartPage: true });
    }

    render() {
        if (this.state.gotoDietPage) {
            return <Redirect to="/Diet" />
        }else if(this.state.gotoMeasuresPage){
            return <Redirect to="/Measures" />
        }else if(this.state.gotoTraningPage){
            return <Redirect to="/Traning" />
        }else if(this.state.gotoNutriPage){
            return <Redirect to="/Nutricionist" />
        }
        return (
                <StartMenuCard onSubmit={this.onSubmit} />
        )
    }
}