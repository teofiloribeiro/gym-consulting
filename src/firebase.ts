import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBDQwsKZf36J9ZLMBuTuMC8bjIHcpHCKDU",
    authDomain: "gym-consulting.firebaseapp.com",
    databaseURL: "https://gym-consulting.firebaseio.com",
    projectId: "gym-consulting",
    storageBucket: "gym-consulting.appspot.com",
    messagingSenderId: "620062201763",
    appId: "1:620062201763:web:9eafa5b47825d3a4bdec16",
    measurementId: "G-196EGYB26Q"
}

// const provider = new firebase.auth.GoogleAuthProvider();
// firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// export const signInWithGoogle = () => {
//     auth.signInWithPopup(provider);
// };

export const authConfig = firebase.initializeApp(firebaseConfig);