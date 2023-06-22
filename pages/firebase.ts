// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHx_gAgF_zdMr9mGRp5knGJozCvPEsDkk",
  authDomain: "next-firebase-zenn.firebaseapp.com",
  projectId: "next-firebase-zenn",
  storageBucket: "next-firebase-zenn.appspot.com",
  messagingSenderId: "235772050828",
  appId: "1:235772050828:web:52230a7f99cc1ea94d6aa9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
