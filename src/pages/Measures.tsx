import React, { useCallback, useEffect, useState } from 'react'
import "./Login.scss"

import { Grid } from '@material-ui/core';
import MeasuresCard from '../components/MeasuresCard';
import { withRouter } from 'react-router-dom';
import { UserMeasures } from '../interfaces/UserMeasures';
import UserMeasuresService from '../services/UserMeasuresService';
import { auth} from "../firebase";

export const  Measures =  withRouter ( ({ history })=>{

    const userMeasuresService: UserMeasuresService = new UserMeasuresService();

    const [height, setHeight] = useState<Number | undefined>(0);

    const [weight, setWeight] = useState<Number | undefined>(0);

    const weightHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWeight(event.target.value as Number);
    };

    const heightHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHeight(event.target.value as Number);
    };

    const [userId, setUserId] = useState<string | undefined>();

    const [userMeasures, setUserMeasures] = useState<UserMeasures>({
        height: 0,
        weight: 0
    });

    useEffect(() => {
    
        const getUserMeasures = async (id?: string) => {
            let response = await userMeasuresService.findByUserId(id);
            setUserMeasures(response || userMeasures)
            setWeight(response != null ? response.weight: 0);
            setHeight(response != null ? response.height: 0);
        }
        getUserMeasures(auth.currentUser?.uid);
    },[userId]); 

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
                <MeasuresCard weight={weight} weightHandleChange={weightHandleChange}
                 height={height} heightHandleChange={heightHandleChange}
                 userMeasures={userMeasures} onSubmit={(event: Event) => onSubmit(event)}/>
            </Grid>
        </Grid>
    );
   
})

export default Measures;