// src/firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYQvYzYO1TnhlhaEiDwstXCvDQ_hZOqAg",
  authDomain: "rd-tech-memoir.firebaseapp.com",
  projectId: "rd-tech-memoir",
  storageBucket: "rd-tech-memoir.appspot.com",
  messagingSenderId: "801431640039",
  appId: "1:801431640039:web:bef6b94042a14f1a4c4f42",
  measurementId: "G-9QXGFD0WM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signOut };

export default firebaseConfig;
