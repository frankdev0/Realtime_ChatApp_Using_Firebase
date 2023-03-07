// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {  getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8uVJ5d1K43xzy6ICuepKEDIUvxwBDfDM",
  authDomain: "message-app-4938e.firebaseapp.com",
  databaseURL:"http://message-app-4938e.firebaseio.com",
  projectId: "message-app-4938e",
  storageBucket: "message-app-4938e.appspot.com",
  messagingSenderId: "1096782018690",
  appId: "1:1096782018690:web:352d4ea2d4a406fd23dc9b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage=  getStorage(app)

export {auth, db, storage};