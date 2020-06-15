import React, { Component, useEffect, useContext, useState } from "react";
import  { AddDietModal, DietItensTable }  from "../components/diet/AddDietModal";
import DietService from "../services/DietService";
import { Diet, Nutrient, Measure } from "../interfaces/Diet";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from "../auth/AuthContext";
import { UserRole } from "../interfaces/User";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
            marginTop: 30,
            marginRight: 20,
            marginLeft: 20,
        },
        table: {
            marginTop: 15
        }
	})
);

const DietPage = withRouter (({ history }) => {
    const classes = useStyles()
    const [dietUserId, setDietUserId] = useState<string | undefined>();

    const [diet, setDiet] = useState<Diet>({
        itens:[],
        title:'',
        userId:'',
        id:''
    });
    
    const dietService: DietService = new DietService();
    const authUser = useContext (AuthContext);
    
    useEffect(() => {
        const searchUserId = authUser?.role == UserRole.STUDENT ? authUser?.id : (history.location.state as string);
        console.log(dietUserId)
        setDietUserId(searchUserId);
        const getDiet = async (id?: string) => {
            let response = await new DietService().findById(id);
            setDiet(response || diet)
        }
        getDiet(dietUserId);
    },[dietUserId]); 
   
    const newDietHandler = async (diet: Diet) => {
        await dietService.create(diet);
        window.location.reload(false)
    }

    return (
        <div className={classes.container}>
            <AddDietModal newDietHandler={newDietHandler} user={dietUserId} dietData={diet}/>
            <div className={classes.table}>
                <DietItensTable dietData={diet.itens}/>
            </div>
        </div>
    )
})

 export default DietPage;
