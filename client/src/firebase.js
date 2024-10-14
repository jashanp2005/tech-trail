// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-ea889.firebaseapp.com",
  // databaseURL: "https://fir-ea889-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-ea889",
  storageBucket: "fir-ea889.appspot.com",
  messagingSenderId: "569376935466",
  appId: "1:569376935466:web:e608f22a3096f206bdbd53",
  // measurementId: "G-GRDR5YT1GQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);