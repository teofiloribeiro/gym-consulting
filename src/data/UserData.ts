import { User, UserRole } from "../interfaces/User";
import { firestore } from "../firebase";
import { USERS } from "./collections";

export const findAllStudents = async () => {
    console.log("tring to retrive data")
    let users: User[] = [];
    
    const dietRef = firestore.collection(USERS);
    let query = await dietRef.where('role','==',UserRole.STUDENT).get()
    query.forEach(obj => {
       console.log( obj.data());
       users.push(obj.data() as User)
    })
    
    return users
}