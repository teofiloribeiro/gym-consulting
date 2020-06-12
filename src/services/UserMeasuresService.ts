import UserMeasuresData from "../data/UserMeasuresData";
import { UserMeasures } from '../interfaces/UserMeasures';

export default class UserMeasuresService {
    UserMeasuresData: UserMeasuresData;

    constructor (){
        this.UserMeasuresData = new UserMeasuresData ();
    }

    create(userMeasures: UserMeasures){
        userMeasures.id = new Date().getTime().toString();
        this.UserMeasuresData.create(userMeasures);
    }
}