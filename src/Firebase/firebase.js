import {getAuth} from 'firebase/auth'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDlDF2HG-Bcersxd20uU9frNtGxPScOcQ",
    authDomain: "imeet-codebase-8ff92.firebaseapp.com",
    projectId: "imeet-codebase-8ff92",
    storageBucket: "imeet-codebase-8ff92.appspot.com",
    messagingSenderId: "371381282299",
    appId: "1:371381282299:web:7167131162b1ee8173975e",
    databaseURL : "https://imeet-codebase-8ff92-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}