import React, { Component } from "react";
import  { AddDietModal, DietItensTable }  from "../components/diet/AddDietModal";
import DietService from "../services/DietService";
import { Diet, Nutrient, Measure } from "../interfaces/Diet";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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


const DietPage = () => {
    const classes = useStyles()
    const dietService: DietService = new DietService();
    const newDietHandler = (diet: Diet) => {
        dietService.create(diet)
    }
    
    return (
        <div className={classes.container}>
            <AddDietModal newDietHandler={newDietHandler}/>
            <div>
                <DietItensTable dietData={diet.itens}/>
            </div>
        </div>
    )
 }

 export default DietPage;

 const diet: Diet = {
     title: "fastfood",
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