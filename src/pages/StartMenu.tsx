import React, { Component, useContext, useState } from 'react';
import StartMenuCard from '../components/StartMenuCard'
import { Redirect } from 'react-router-dom';

import dietImg from '../components/assets/diet.jpg';
import traningImg from '../components/assets/training.jpg';
import medidaImg from '../components/assets/medidas.jpg';
import dicasSaudeTreinoImg from '../components/assets/dicaSaudeTreino.jpg'
import { Grid } from '@material-ui/core';

import "./StartMenu.scss"
import { AuthContext } from '../auth/AuthContext';
import { UserRole } from '../interfaces/User';

const StartMenu = () =>{
    const [gotoDietPage, setGotoDietPage] = useState(false);
    const [gotoTraningPage, setGotoTraningPage] = useState(false);
    const [gotoAdvicePage, setGotoAdvicePage] = useState(false);
    const [gotoMeasuresPage, setGotoMeasuresPage] = useState(false);

    const user = useContext(AuthContext);

    const onSubmit = () => {
        setGotoDietPage(true);
    }
    
    const onSubmitAdvice = () => {
        setGotoAdvicePage(true)
    }

    const onSubmitMeasures = () => {
        setGotoMeasuresPage(true)
    }
    
    const onSubmitTraning = () => {
        setGotoTraningPage(true)
    }

    if(user && user.role != UserRole.STUDENT){
        return <Redirect to="/users" push={true}/>
    }

    if (gotoDietPage) {
        return <Redirect to="/Diet" push={true}/>
    }else if(gotoMeasuresPage){
        return <Redirect to="/Measures" push={true}/>
    }else if(gotoTraningPage){
        return <Redirect to="/Training" push={true}/>
    }else if(gotoAdvicePage){
        return <Redirect to="/Advice" push={true}/>
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
            onSubmit={onSubmit} />

        <StartMenuCard
            title={"Treino"}
            img={traningImg}
            description={"Os treinos são essenciais para a saúde,perda de gordura e o guanho de massa magra."}
            onSubmit={onSubmitTraning} />
            
        <StartMenuCard
            title={"Medidas"}
            img={medidaImg}
            description={"É importante saber suas medidas, para ver o seu progresso"}
            onSubmit={onSubmitMeasures} />

            <StartMenuCard
            title={"Dicas"}
            img={dicasSaudeTreinoImg}
            description={"Dicas de saúde e treinos. Essas dicas podem ajudar no treino e dieta."}
            onSubmit={onSubmitAdvice} />
        </Grid>
    )
    
}

export default StartMenu;

const RedirectNonStudent = (props:any) =>{ 
    const user = useContext(AuthContext);

    if(user && user.role != UserRole.STUDENT){
        return <Redirect to="/" push={true}/>
    }
}