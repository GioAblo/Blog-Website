// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjCzjGeEFB5sJsjLB3Ya6g__8nCfoT5sk",
  authDomain: "blog-website-cb1de.firebaseapp.com",
  projectId: "blog-website-cb1de",
  storageBucket: "blog-website-cb1de.appspot.com",
  messagingSenderId: "789327442791",
  appId: "1:789327442791:web:65d6ff218e0d34dea535c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app); 
export const provider = new GoogleAuthProvider(app);