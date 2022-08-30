import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyAA3ehv_F9PrDJ0H6-3TfV1D4f-lJ5WF0M",
    authDomain: "squareq-7d762.firebaseapp.com",
    projectId: "squareq-7d762",
    storageBucket: "squareq-7d762.appspot.com",
    messagingSenderId: "490735131981",
    appId: "1:490735131981:web:c92e7dd0976dcb9b30eb04",
    measurementId: "G-8XQ1DSXN96"
};

export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db = getFirestore(app);