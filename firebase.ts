import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsdeEQKXs_RXeQ-R-DwizF0H_MYRg1R0o",
  authDomain: "weekends-412007.firebaseapp.com",
  projectId: "weekends-412007",
  storageBucket: "weekends-412007.appspot.com",
  messagingSenderId: "353260447399",
  appId: "1:353260447399:web:6d4d53feb0e3e664e1dd82",
  measurementId: "G-LKJ2620G4P",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db, firebaseApp };
