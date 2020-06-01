import { auth, firestore } from "../firebase";
import { User } from "../interfaces/User";

export const register = async (user: User , password: string) => {
    
    try{
        const res =  await auth.createUserWithEmailAndPassword(user.email, password);
        user.id = res.user?.uid;
        await createUser(user);
        
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
        await userRef.set( user );
    }catch (error){
        console.error("erro creating user ", error);
    }
    
    return findUserById(user?.id);
}

export const findUserById = async (id?: string)  => {
    if(!id) return null

    try{
        const userDoc = await firestore.doc(`users/${id}`).get();
        const user = <any> userDoc.data();
        
        return {
            ...user
        } as User
    }catch(error){
        console.error("error finding user by id ", error)
    }
}


export const updateUser = async (user: User) => {
    try{
        const res =  await auth.currentUser;
        user.id = res?.uid;
        const userRef = firestore.doc(`users/${user.id}`);
        await userRef.update({ user });
    }catch (error) {
        console.error("error update user", error);
    }
}