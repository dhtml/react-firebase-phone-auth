import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyDeojz894xWa7d0gTxNYs2kHg4FWRFi_J8",
  authDomain: "gorilla-fc4c7.firebaseapp.com",
  projectId: "gorilla-fc4c7",
  storageBucket: "gorilla-fc4c7.appspot.com",
  messagingSenderId: "203315212225",
  appId: "1:203315212225:web:6ee21e8b299099473c8940",
  measurementId: "G-0KMWKTSQQY"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};
