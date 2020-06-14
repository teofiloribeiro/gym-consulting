import React, { Component } from 'react';
import StartMenuCard from '../components/StartMenuCard'
import { Redirect } from 'react-router-dom';

import dietImg from '../components/assets/diet.jpg';
import traningImg from '../components/assets/training.jpg';
import medidaImg from '../components/assets/medidas.jpg';
import dicasSaudeTreinoImg from '../components/assets/dicaSaudeTreino.jpg'
import { Grid } from '@material-ui/core';

import "./StartMenu.scss"

export default class StartMenu extends Component {
    state = {
        gotoDietPage: false,
        gotoTraningPage:false,
        gotoAdvicePage:false,
        gotoMeasuresPage:false
    };

    onUserHandleChange = (event: any) => {
        this.setState({ user: event.target.value });
        console.log(this.state)
    }

    onSubmit = () => {
        this.setState({ gotoDietPage: true });
    }
    
    onSubmitAdvice = () => {
        this.setState({ gotoAdvicePage: true})
    }

    onSubmitMeasures = () => {
        this.setState({ gotoMeasuresPage: true})
    }
    
    onSubmitTraning = () => {
        this.setState({ gotoTraningPage: true})
    }

    render() {
        if (this.state.gotoDietPage) {
            return <Redirect to="/Diet" />
        }else if(this.state.gotoMeasuresPage){
            return <Redirect to="/Measures" />
        }else if(this.state.gotoTraningPage){
            return <Redirect to="/Training" />
        }else if(this.state.gotoAdvicePage){
            return <Redirect to="/Advice" />
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
                onSubmit={this.onSubmitTraning} />
                
            <StartMenuCard
                title={"Medidas"}
                img={medidaImg}
                description={"É importante saber suas medidas, para ver o seu progresso"}
                onSubmit={this.onSubmitMeasures} />

             <StartMenuCard
                title={"Dicas"}
                img={dicasSaudeTreinoImg}
                description={"Dicas de saúde e treinos. Essas dicas podem ajudar no treino e dieta."}
                onSubmit={this.onSubmitAdvice} />
            </Grid>
        )
    }
}