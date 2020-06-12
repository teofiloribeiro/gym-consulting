import { firestore } from "../firebase";
import { Diet } from "../interfaces/Diet";
import { UserRole, User } from "../interfaces/User";
import { DIET } from "./collections";
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
}