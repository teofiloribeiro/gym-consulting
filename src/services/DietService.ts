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

    findById = async (userId?: string) => {
        if(!userId){
            return {
                itens:[],
                title:'',
                userId:'',
                id:''
            } as Diet 
        }
        return await this.DietData.findById(userId);
    }
}