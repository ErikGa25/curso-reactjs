// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "c",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = app.firestore();