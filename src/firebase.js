// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  // authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: import.meta.VITE_DB_URL,
  // projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
  apiKey: "AIzaSyDp-nwSyhbcj8eWL1m1nzvG3cleZBzcBp8",
  authDomain: "smartbus-30efd.firebaseapp.com",
  databaseURL: "https://smartbus-30efd-default-rtdb.firebaseio.com",
  projectId: "smartbus-30efd",
  storageBucket: "smartbus-30efd.appspot.com",
  messagingSenderId: "534131741936",
  appId: "1:534131741936:web:9d3edc5d9bc17658549e35",
  measurementId: "G-GYGGKBZ9GN"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
};


 const auth = firebase.auth;
const databaseRef = firebase.database().ref('test');
export  {firebase, databaseRef, auth};

