import { firestore } from '../firebase';
import { Nutricionist } from './../interfaces/Nutricionist'
import { UserRole, User } from '../interfaces/User'
import {USERS} from './collections'


export default class NutricionistData {




    consulta = async () => {
        const nutriUsers: User[] = [];
        const userRef = firestore.collection(USERS)

        let query = await userRef.where('role', '==', UserRole.NUTRITIONIST).get()

        query.forEach(doc =>{
            console.log(doc.data());
            nutriUsers.push(doc.data() as User);
        })
        return nutriUsers;
    }



}



