// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7H4NnkmyOUvpDvZoiMwvc8SMJRqPPFLU",
  authDomain: "florescerapp.firebaseapp.com",
  projectId: "florescerapp",
  storageBucket: "florescerapp.appspot.com",
  messagingSenderId: "633504703664",
  appId: "1:633504703664:web:cad9197a513b6e78098775",
  measurementId: "G-2VT0QQHM6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, analytics, db };