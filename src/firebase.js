import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAMIzVHI2I_cEKxmUez_9iBhCDV0nqElgE",
  authDomain: "dasboard-7f327.firebaseapp.com",
  projectId: "dasboard-7f327",
  storageBucket: "dasboard-7f327.appspot.com",
  messagingSenderId: "904888534314",
  appId: "1:904888534314:web:5401dd5b3e1a3582760a53",
  measurementId: "G-QFJ8EM8WXM"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
