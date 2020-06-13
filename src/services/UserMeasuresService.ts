import UserMeasuresData from "../data/UserMeasuresData";
import { UserMeasures } from '../interfaces/UserMeasures';

import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';

import { auth} from "../firebase";

export default class UserMeasuresService {
    UserMeasuresData: UserMeasuresData;

    constructor (){
        this.UserMeasuresData = new UserMeasuresData ();
    }
    
    create(userMeasures: UserMeasures){
        userMeasures.id = new Date().getTime().toString();
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
}