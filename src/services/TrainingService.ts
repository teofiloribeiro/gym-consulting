import TraineData from "../data/TraineData";
import { Training, Level } from "../interfaces/training";

export default class TrainingService {
    TrainingData: TraineData;

    constructor (){
        this.TrainingData = new TraineData ();
    }

    async create(training: Training) {
        if(!training.id){
            training.id = new Date().getTime().toString();
        }
        await this.TrainingData.createOrUpdate(training);
    }

    findById = async (userId?: string) => {
        if(!userId){
            return {
                level:Level.INICIANTE,
                itens:[],
                title:'',
                userId:'',
                id:''
            } as Training 
        }
        return await this.TrainingData.findById(userId);
    }
}