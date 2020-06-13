import { firestore } from "../firebase";
import { Training } from "../interfaces/training";
import { UserRole, User } from "../interfaces/User";
import { TRAINING } from "./collections";

export default class trainingData {

    createOrUpdate = async (training: Training) => {
        const trainingRef = firestore.collection('training').doc(training.id);

        try {
            const newtraining = await trainingRef.set(training);
            console.log(`New training was created id: [${training.id}]`, newtraining);
        }catch(err){
            console.log(`Error Creating training`, err);
        }
    }

    findById = async (userId: string) => {
       
        console.log("trying to retrive data", userId)
        let users: Training[] = []
        
        const trainingRef = firestore.collection(TRAINING);
        let query = await trainingRef.where('userId','==',userId).get()
        query.forEach(obj => {
           console.log( obj.data());
           users.push(obj.data() as Training)
        })
        
        return users[0]
    }

}

