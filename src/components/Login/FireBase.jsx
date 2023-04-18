import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDW9UQeeMTGFM-2KqrKPnBZ9Swm4cTUwsI",
    authDomain: "twitter-clone-23b62.firebaseapp.com",
    projectId: "twitter-clone-23b62",
    storageBucket: "twitter-clone-23b62.appspot.com",
    messagingSenderId: "1079561990701",
    appId: "1:1079561990701:web:e227e5ef2843952b157ea4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();


export default app;