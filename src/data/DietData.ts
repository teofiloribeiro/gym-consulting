import { firestore } from "../firebase";
import { Diet } from "../interfaces/Diet";

export default class DietData {

    create = async (diet: Diet) => {
        const dietRef = firestore.collection('diet').doc(diet.id);

        try {
            const newDiet = await dietRef.set(diet);
            console.log(`New Diet was created id: [${diet.id}]`, newDiet);
        }catch(err){
            console.log(`Error Creating Diet`, err);
        }
    }
}