// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdEH9onjXNIs61aej12sUmncd2cwtdxpo",
  authDomain: "mango-eab79.firebaseapp.com",
  projectId: "mango-eab79",
  storageBucket: "mango-eab79.appspot.com",
  messagingSenderId: "568464530590",
  appId: "1:568464530590:web:13231325fddbedcb402f8f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);