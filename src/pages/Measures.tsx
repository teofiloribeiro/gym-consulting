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
    const [waist, setWaist] = useState<Number | undefined>(0);
    const [arm, setArm] = useState<Number | undefined>(0);
    const [chest, setChest] = useState<Number | undefined>(0);
    const [thigh, setThigh] = useState<Number | undefined>(0);
    const [calf, setCalf] = useState<Number | undefined>(0);

    const weightHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWeight(event.target.value as Number);
    };

    const heightHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setHeight(event.target.value as Number);
    };

    const waistHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setWaist(event.target.value as Number);
    };

    const armHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setArm(event.target.value as Number);
    };

    const thighHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setThigh(event.target.value as Number);
    };

    const chestHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setChest(event.target.value as Number);
    };

    const calfHandleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCalf(event.target.value as Number);
    };
    
    const [userId, setUserId] = useState<string | undefined>();

    const [userMeasures, setUserMeasures] = useState<UserMeasures>({
        dateTimeCreation: new Date(),
        height: 0,
        weight: 0,
        waist: 0,
        arm: 0,
        chest: 0,
        thigh: 0,
        calf: 0
    });

    useEffect(() => {
    
        const getUserMeasures = async (id?: string) => {
            let response = await userMeasuresService.findByUserId(id);
            setUserMeasures(response || userMeasures)
            setWeight(response != null ? response.weight: 0);
            setHeight(response != null ? response.height: 0);
            setWaist(response != null ? response.waist: 0);
            setArm(response != null ? response.arm: 0);
            setChest(response != null ? response.chest: 0);
            setThigh(response != null ? response.thigh: 0);
            setCalf(response != null ? response.calf: 0);
        }
        getUserMeasures(auth.currentUser?.uid);
    },[userId]); 

    const onSubmit = useCallback(
         async (event:any) => {
            event.preventDefault();
            const { weight, height, waist, arm, chest, thigh, calf } = event.target.elements;

            const userMeasures: UserMeasures = {
                dateTimeCreation: new Date(),
                weight: weight.value,
                height: height.value,
                waist: waist.value,
                arm: arm.value,
                chest: chest.value,
                thigh: thigh.value,
                calf: calf.value
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
                 waist={waist} waistHandleChange={waistHandleChange}
                 arm={arm} armHandleChange={armHandleChange}
                 chest={chest} chestHandleChange={chestHandleChange}
                 thigh={thigh} thighHandleChange={thighHandleChange}
                 calf={calf} calfHandleChange={calfHandleChange}
                 userMeasures={userMeasures} onSubmit={(event: Event) => onSubmit(event)}/>
            </Grid>
        </Grid>
    );
   
})

export default Measures;