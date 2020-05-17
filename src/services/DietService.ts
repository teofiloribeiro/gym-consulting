import DietData from "../data/DietData";
import { Diet } from "../interfaces/Diet";

export default class DietService {
    DietData: DietData;

    constructor (){
        this.DietData = new DietData ();
    }

    create(diet: Diet){
        diet.id = new Date().getTime().toString();
        this.DietData.create(diet);
    }
}