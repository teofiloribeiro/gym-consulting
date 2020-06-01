import React, { Component, useEffect, useContext, useState } from "react";
import  { AddDietModal, DietItensTable }  from "../components/diet/AddDietModal";
import DietService from "../services/DietService";
import { Diet, Nutrient, Measure } from "../interfaces/Diet";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { withRouter, Redirect } from 'react-router-dom'
import { AuthContext } from "../auth/AuthContext";

// export default class DietPage1 extends Component {
//     dietService: DietService = new DietService();

//     componentDidMount = async () => {
        
//     }



//     render(){
//         return (
//             <div>
//                 <AddDietModal newDietHandler={this.newDietHandler}/>
//                 <div>
//                     <DietItensTable dietData={diet.itens}/>
//                 </div>
//             </div>
//         )
//     }

//     newDietHandler = (diet: Diet) => {
//         this.dietService.create(diet)
//     }
//  }

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
            width: '90%',
            flex: '',
            alignItems: 'center'
		},
	})
);


const DietPage = withRouter (({ history }) => {
    const classes = useStyles()
    const [diet, setDiet] = useState<Diet>({
        itens:[],
        title:'',
        userId:'',
        id:''
    });
    const dietService: DietService = new DietService();

    const authUser = useContext (AuthContext);

    useEffect(() => {
        const getDiet = async (id?: string) => {
            let response = await new DietService().findById(id);
            setDiet(response || diet)
        }   
        
        getDiet(history.location.state as string || authUser?.id);
    },[]); 
   
    const newDietHandler = (diet: Diet) => {
        dietService.create(diet)
    }
    
    return (
        <div className={classes.container}>
            <AddDietModal newDietHandler={newDietHandler} user={authUser}/>
            <div>
                <DietItensTable dietData={diet.itens}/>
            </div>
        </div>
    )
})

 export default DietPage;

 const diet: Diet = {
     title: "fastfood",
     userId: "suhauhuashus",
     itens: [
        {
            desc: 'Lasanha',
            measure: Measure.KG,
            nutrient: Nutrient.CARBOIDRATO,
            qty: 2,
            time: '12:00'
        },
        {
            desc: 'Peixe',
            measure: Measure.KG,
            nutrient: Nutrient.CARBOIDRATO,
            qty: 2,
            time: '12:00'
        },{
            desc: 'Pitanga',
            measure: Measure.KG,
            nutrient: Nutrient.CARBOIDRATO,
            qty: 2,
            time: '12:00'
        }
     ]

 }