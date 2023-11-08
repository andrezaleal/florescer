import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA3h0shj5Sn0Jz3DjNz1GrPStcWWlbyaQQ",
    authDomain: "florescer-api.firebaseapp.com",
    projectId: "florescer-api",
    storageBucket: "florescer-api.appspot.com",
    messagingSenderId: "615503890571",
    appId: "1:615503890571:web:cfb9eb4726a6edbcb6ec8e"
  };
  
const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const storage = getStorage(firebaseApp);

export { firebaseApp, analytics, db, auth, storage };