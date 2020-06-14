import { firestore } from "../firebase";
import { MEASURES } from "./collections";
import { UserMeasures } from '../interfaces/UserMeasures';
import  DataPoints  from '../util/DataPoints';
import { firestore as firestoreT} from "firebase";

export default class UserMeasuresData {

    create = async (userMeasures: UserMeasures) => {
        const dietRef = firestore.collection('measures').doc(userMeasures.id);

        try {
            const newDiet = await dietRef.set(userMeasures);
            console.log(`New user measures was created id: [${userMeasures.id}]`, newDiet);
        }catch(err){
            console.log(`Error Creating user measures`, err);
        }
    }

    findByUserId = async (userId: string) => {
        const userMeasures: UserMeasures[] = [];
        console.log("trying to retrive data", userId)
    
        const userMeasuresRef = firestore.collection(MEASURES);
        let query = await userMeasuresRef.where('userId','==',userId).get()
        query.forEach(obj => {
           console.log( obj.data());
           userMeasures.push(obj.data() as UserMeasures)
        })
        
        return userMeasures[userMeasures.length-1];
    }

    findAllByUserId = async (userId?: string) => {
        const userMeasures: UserMeasures[] = [];
        console.log("trying to retrive data", userId)
    
        const userMeasuresRef = firestore.collection(MEASURES);
        let query = await userMeasuresRef.where('userId','==',userId).get()
        query.forEach(obj => {
           console.log( obj.data());
           userMeasures.push(obj.data() as UserMeasures)
        })
        
        return userMeasures;
    }

    getDataPoints = async (userId?: string)  => {
        let userMeasuresList: UserMeasures[] =[];
        let dataPointsList: DataPoints[] =[];

        this.findAllByUserId(userId).then(data => {
          
            data.forEach(point =>{
                const dataPoint = new DataPoints();
                dataPoint.y = Number(point.weight);
                
                const x =  point.dateTimeCreation as unknown;
                const y = x as firestoreT.Timestamp;
                dataPoint.x = y.toDate();

                userMeasuresList.push(point)
                dataPointsList.push(dataPoint);
            })
        })
        return dataPointsList;
    }


   
}
