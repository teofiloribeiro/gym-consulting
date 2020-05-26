import { firestore } from '../firebase';
import { Nutricionist } from './../interfaces/Nutricionist'
import { UserRole , User} from '../interfaces/User'



export default class NutricionistData {



    consulta = () => {
        let usersRef = firestore.collection('users');
        let query = usersRef.where('role', '==', 'NUTRICIONIST').get()
        .then(snapshot => {
            if(snapshot.empty){
                console.log('No matching documents')
                return;
            }
            snapshot.forEach(doc => {
                console.log(doc.data())
            })
        })
        .catch(err => {
            console.log('erro getting documents ', err)
        })

    }

    

}



