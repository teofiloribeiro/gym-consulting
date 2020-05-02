import { auth, firestore } from "../firebase";
import { User } from "../interfaces/User";

export const register = async (user: User , password: string) => {
    
    try{
        const res =  await auth.createUserWithEmailAndPassword(user.email, password);
        user.id = res.user?.uid;
        createUser(user);
        
    }catch (error) {
        //Handler error and show to the user
        /**
         * email invalid
         * weak password
         */
        console.error("error registering", error);
    }
}

export const login = async (email: string, password: string) => {

    try{
        const res = await auth.signInWithEmailAndPassword(email, password);
        const user = await findUserById(res.user?.uid);
        
        return user;
    }catch(error){
        console.error("error on login", error);
    }
}

export const logout = async () => {
    auth.signOut()
}

const createUser = async (user: User) => {
    const userRef = firestore.doc(`users/${user.id}`);
    const snapshot = await userRef.get();

    if(snapshot.exists){
        return snapshot
    }

    try{
        await userRef.set({ user });
    }catch (error){
        console.error("erro creating user ", error);
    }
    
    return findUserById(user?.id);
}

const findUserById = async (id?: string)  => {
    if(!id) return null

    try{
        const user = await firestore.doc(`users/${id}`).get();
        return {
            id,
            ...user.data
        }
    }catch(error){
        console.error("error finding user by id ", error)
    }
}