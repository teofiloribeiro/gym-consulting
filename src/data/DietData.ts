import { firestore } from "../firebase";
import { Diet } from "../interfaces/Diet";
import { UserRole, User } from "../interfaces/User";
import { DIET } from "./collections";

export default class DietData {

    createOrUpdate = async (diet: Diet) => {
        const dietRef = firestore.collection('diet').doc(diet.id);

        try {
            const newDiet = await dietRef.set(diet);
            console.log(`New Diet was created id: [${diet.id}]`, newDiet);
        }catch(err){
            console.log(`Error Creating Diet`, err);
        }
    }

    findById = async (userId: string) => {
       
        console.log("trying to retrive data", userId)
        let users: Diet[] = []
        
        const dietRef = firestore.collection(DIET);
        let query = await dietRef.where('userId','==',userId).get()
        query.forEach(obj => {
           console.log( obj.data());
           users.push(obj.data() as Diet)
        })
        
        return users[0]
    }

}