// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA164JgPTgcAXiHvSiABj-E1cg4I-O42Uo",
  authDomain: "my-portfolio-ed3e0.firebaseapp.com",
  projectId: "my-portfolio-ed3e0",
  storageBucket: "my-portfolio-ed3e0.appspot.com",
  messagingSenderId: "550988259321",
  appId: "1:550988259321:web:6e66ebd5477c66d7e2a728",
  measurementId: "G-90FT1NKSN4"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();