
import React, { useCallback } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import RegisterCard from '../components/RegisterCard';
import { withRouter } from 'react-router-dom';
import { register } from '../auth/AuthService';
import { User, UserRole } from '../interfaces/User';


export const Register = withRouter (({ history })=>{
     
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
            
            await register(user, password.value);
            history.push('/');
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
                <RegisterCard onSubmit={(event: Event) => onSubmit(event)} />
            </Grid>
        </Grid>
    );
   
})

const parseDate = (date:string) => {
    const dateVet = date.split("/").map((date)=>  parseInt(date))
    return new Date (dateVet[2], dateVet[1]-1, dateVet[0] );
}
export default Register;