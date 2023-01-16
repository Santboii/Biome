// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZPj7vO4Jx7SFKZUrPQYuFrECTU6jx43Y",
  authDomain: "sparrow-87c81.firebaseapp.com",
  projectId: "sparrow-87c81",
  storageBucket: "sparrow-87c81.appspot.com",
  messagingSenderId: "794090532926",
  appId: "1:794090532926:web:43b9d557eabeafd6b6216f",
  measurementId: "G-JF6Q5C2E3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
