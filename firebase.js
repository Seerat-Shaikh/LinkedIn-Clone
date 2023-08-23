import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'; //Actual database telly firebase what we are using
import { getAuth } from 'firebase/auth';  // AUthentication for LogIn and LogOut
import { GoogleAuthProvider } from "firebase/auth";  //Using Google Authentication
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCI_3mgGtyt6pIy42hn6MRXZs9KkIsCybo",
    authDomain: "linkedin-clone-be641.firebaseapp.com",
    projectId: "linkedin-clone-be641",
    storageBucket: "linkedin-clone-be641.appspot.com",
    messagingSenderId: "356957352676",
    appId: "1:356957352676:web:32c7ecd774d4afc58fb2f1",
    measurementId: "G-Y911WXXWRX"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { firebaseApp, auth, provider, storage };
export default db;