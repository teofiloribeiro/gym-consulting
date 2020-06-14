import UserMeasuresData from "../data/UserMeasuresData";
import { UserMeasures } from '../interfaces/UserMeasures';

import { auth} from "../firebase";

export default class UserMeasuresService {
    UserMeasuresData: UserMeasuresData;

    constructor (){
        this.UserMeasuresData = new UserMeasuresData ();
    }
    
    create(userMeasures: UserMeasures){
        userMeasures.id = new Date().getTime().toString();
        userMeasures.dateTimeCreation = new Date();
        userMeasures.userId = auth.currentUser?.uid;
        this.UserMeasuresData.create(userMeasures);
    }
   
    findByUserId = async (userId?: string) => {
        if(!userId){
            return {
               height:0,
               weight:0,
            } as UserMeasures 
        }
        return await this.UserMeasuresData.findByUserId(userId);
    }

    findAllByUserId = async (userId?: string) => {
        if(!userId){
            return {
               height:0,
               weight:0,
            } as UserMeasures 
        }
        return await this.UserMeasuresData.findAllByUserId(userId);
    }
    
}