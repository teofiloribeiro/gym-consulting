import React, { useCallback } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import ProfileCard from '../components/ProfileCard';
import { withRouter } from 'react-router-dom';
import { register, updateUser } from '../auth/AuthService';
import { User, UserRole } from '../interfaces/User';

import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

export const Profile = withRouter (({ history })=>{
  
    const user = useContext (AuthContext);

    const onSubmit = useCallback(
        async (event:any) => {
            event.preventDefault();
            const { name, email, role, birth, password } = event.target.elements;
            
            const user: User = {
                name: name.value,
                email: email.value,
                birth: parseDate(birth.value),
                role: role.value as UserRole       
            }
            updateUser(user);
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
                <ProfileCard  user={user} onSubmit={(event: Event) => onSubmit(event)} />
            </Grid>
        </Grid>
    );
   
})

const parseDate = (date:string) => {
    const dateVet = date.split("/").map((date)=>  parseInt(date))
    return new Date (dateVet[2], dateVet[1]-1, dateVet[0] );
}
export default Profile;