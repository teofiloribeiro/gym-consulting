import React, { Component, useEffect, useContext, useState } from "react";
import  { AddTrainingModal, TrainingItensTable }  from "../components/Training/AddTrainingModal";
import { Training, Exercise, ChargeType, Level } from "../interfaces/training";
import TrainingService from "../services/TrainingService";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from "../auth/AuthContext";
import { UserRole } from "../interfaces/User";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
            width: '90%',
            flex: '',
            alignItems: 'center',
            marginTop: 30
		},
	})
);

const TrainingPage = withRouter (({ history }) => {
    const classes = useStyles()
    const [trainingUserId, setTrainingUserId] = useState<string | undefined>();

    const [training, setTraining] = useState<Training>({
        level:Level.INICIANTE,
        itens:[],
        title:'',
        userId:'',
        id:''
    });
    
    const trainingService: TrainingService = new TrainingService();
    
    const authUser = useContext (AuthContext);
    
    useEffect(() => {
        const searchUserId = authUser?.role == UserRole.STUDENT ? authUser?.id : (history.location.state as string);
        console.log(trainingUserId)
        setTrainingUserId(searchUserId);
        const getTraining = async (id?: string) => {
            let response = await new TrainingService().findById(id);
            setTraining(response || training)
        }
        getTraining(trainingUserId);
    },[trainingUserId]); 
   
    const newTrainingHandler = async (training: Training) => {
        await trainingService.create(training);
        window.location.reload(false)
    }

    return (
        <div className={classes.container}>
                <AddTrainingModal newTrainingHandler={newTrainingHandler} user={trainingUserId} trainingData={training}/>
            <div>
                <TrainingItensTable trainingData={training.itens}/>
            </div>
        </div>
    )
})

 export default TrainingPage;
