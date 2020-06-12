import DietData from "../data/DietData";
import { Diet } from "../interfaces/Diet";

export default class DietService {
    DietData: DietData;

    constructor (){
        this.DietData = new DietData ();
    }

    async create(diet: Diet) {
        if(!diet.id){
            diet.id = new Date().getTime().toString();
        }
        await this.DietData.createOrUpdate(diet);
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