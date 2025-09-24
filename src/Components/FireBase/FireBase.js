// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOLGlZa3qmFCYQE7Muw0ErRsu9vqC-7W0",
  authDomain: "gather-40813.firebaseapp.com",
  projectId: "gather-40813",
  storageBucket: "gather-40813.firebasestorage.app",
  messagingSenderId: "308518463340",
  appId: "1:308518463340:web:571f751ade986450c4f549",
  measurementId: "G-W1RPDC3B5Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
