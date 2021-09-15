import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCGxU8EtNcuSPF9E_bNRPsX25B_2qg9BGI",
  authDomain: "clone-94066.firebaseapp.com",
  projectId: "clone-94066",
  storageBucket: "clone-94066.appspot.com",
  messagingSenderId: "175979765323",
  appId: "1:175979765323:web:bc67d821521b5a2a0f77ce"    
});


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};