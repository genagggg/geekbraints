import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {

    apiKey: "AIzaSyAPTyC5arcv0fOfowYHD61vm8Zs6JC-52g",

    authDomain: "fir-lesson-ea07f.firebaseapp.com",

    projectId: "fir-lesson-ea07f",

    storageBucket: "fir-lesson-ea07f.appspot.com",

    messagingSenderId: "889147481855",

    appId: "1:889147481855:web:5df3c4d68bce81ce6236ca"

};

const firebaseDb = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();