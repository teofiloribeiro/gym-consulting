import React, { useCallback } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import MeasuresCard from '../components/MeasuresCard';
import { withRouter } from 'react-router-dom';
import { register, updateUser } from '../auth/AuthService';
import { User, UserRole } from '../interfaces/User';
import { UserMeasures } from '../interfaces/UserMeasures';

import UserMeasuresService from '../services/UserMeasuresService';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const Profile = withRouter (({ history })=>{

    const userMeasuresService: UserMeasuresService = new UserMeasuresService();
  
    const onSubmit = useCallback(
         async (event:any) => {
            event.preventDefault();
            const { weight, height } = event.target.elements;

          
            const userMeasures: UserMeasures = {
                weight: weight.value,
                height: height.value,
            }
           userMeasuresService.create(userMeasures);
           history.goBack();
        },[history]
    )

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className="cardContainer">
            <Grid item xs={12} md={6} lg={4} >
                <MeasuresCard onSubmit={(event: Event) => onSubmit(event)}/>
            </Grid>
        </Grid>
    );
   
})

export default Profile;