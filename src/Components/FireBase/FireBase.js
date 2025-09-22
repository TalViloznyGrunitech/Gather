// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvHnGfyklIPe2y6ZNW0ML4iBpV2n7_J6M",
  authDomain: "gather-61dd9.firebaseapp.com",
  projectId: "gather-61dd9",
  storageBucket: "gather-61dd9.firebasestorage.app",
  messagingSenderId: "61675422992",
  appId: "1:61675422992:web:a4ace343ff0f3e5c441195",
  measurementId: "G-970P5Q9LH6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export { auth }; 