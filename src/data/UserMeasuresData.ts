import { firestore } from "../firebase";
import { MEASURES } from "./collections";
import { UserMeasures } from '../interfaces/UserMeasures';

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
}