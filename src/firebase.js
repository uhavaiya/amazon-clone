// import firebase from 'firebase'

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyB1U1N-CpSX8g94ZN2hiZvob1-sh334bwo",
//     authDomain: "clone-a4419.firebaseapp.com",
//     databaseURL: "https://clone-a4419.firebaseapp.com/__/auth/action?mode=action&oobCode=code",
//     projectId: "clone-a4419",
//     storageBucket: "clone-a4419.appspot.com",
//     messagingSenderId: "668762849761",
//     appId: "1:668762849761:web:ef1ef6a98a4a44308512a0"
// });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1U1N-CpSX8g94ZN2hiZvob1-sh334bwo",
  authDomain: "clone-a4419.firebaseapp.com",
  
  projectId: "clone-a4419",
  storageBucket: "clone-a4419.appspot.com",
  messagingSenderId: "668762849761",
  appId: "1:668762849761:web:ef1ef6a98a4a44308512a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = app.firestore;
const auth = app.auth;

export {db, auth};