import React, { Component } from 'react';
import StartMenuCard from '../components/StartMenuCard'
import { Redirect } from 'react-router-dom';

import dietImg from '../components/assets/diet.jpg';
import traningImg from '../components/assets/training.jpg';
import nutricionistaImg from '../components/assets/nutricionista.jpg';
import medidaImg from '../components/assets/medidas.jpg';
import { Grid } from '@material-ui/core';

import "./StartMenu.scss"

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
        this.setState({ gotoDietPage: true });
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

            <Grid className="cardContainerStartMenu"
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                 > 

                <StartMenuCard
                title={"Dieta"}
                img={dietImg}
                description={"Uma boa dieta e treinos trazem melhores resultados, além de fazer bem a saúde."}
                onSubmit={this.onSubmit} />

            <StartMenuCard
                title={"Treino"}
                img={traningImg}
                description={"Os treinos são essenciais para a saúde,perda de gordura e o guanho de massa magra."}
                onSubmit={this.onSubmit} />

                
            <StartMenuCard
                title={"Nutricionista"}
                img={nutricionistaImg}
                description={"O nutricionista elabora uma dieta que atenda a sua necessidade. Para resultados mais rápido e seguro."}
                onSubmit={this.onSubmit} />

                
            <StartMenuCard
                title={"Medida"}
                img={medidaImg}
                description={"Uma boa dieta e treinos trazem melhores resultados, além de fazer bem a saúde."}
                onSubmit={this.onSubmit} />
            </Grid>
        )
    }
}