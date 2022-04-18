// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClZhPe1v3qCFj4qEzIlLY2Hz0pH8W0PAY",
    authDomain: "it-tutor-d29ce.firebaseapp.com",
    projectId: "it-tutor-d29ce",
    storageBucket: "it-tutor-d29ce.appspot.com",
    messagingSenderId: "53342757537",
    appId: "1:53342757537:web:e077486527b7c10a3146e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;