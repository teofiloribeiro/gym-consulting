import React, { Component } from "react";
import  { AddDietModal }  from "../components/diet/AddDietModal";
import DietService from "../services/DietService";
import { Diet } from "../interfaces/Diet";


export default class DietPage extends Component {
    dietService: DietService = new DietService();

    componentDidMount = async () => {
        
    }



    render(){
        return (
            <AddDietModal newDietHandler={this.newDietHandler}/>
        )
    }

    newDietHandler = (diet: Diet) => {
        this.dietService.create(diet)
    }
 }