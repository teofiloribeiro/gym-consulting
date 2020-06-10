import React, { useCallback } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import MeasuresCard from '../components/MeasuresCard';
import { withRouter } from 'react-router-dom';
import { register, updateUser } from '../auth/AuthService';
import { User, UserRole } from '../interfaces/User';

import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const Profile = withRouter (({ history })=>{
  
    const user = useContext (AuthContext);

    const onSubmit = useCallback(
        async (event:any) => { 
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
                <MeasuresCard  onSubmit={(event: Event) => onSubmit(event)} />
            </Grid>
        </Grid>
    );
   
})


export default Profile;