// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY7FI7jGftJ-uPIpad9-IcRC96rhY-0YE",
  authDomain: "house-buyers.firebaseapp.com",
  projectId: "house-buyers",
  storageBucket: "house-buyers.appspot.com",
  messagingSenderId: "21090795641",
  appId: "1:21090795641:web:3e38dc7ba57c6ce16254a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();