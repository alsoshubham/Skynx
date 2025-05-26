// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALrBj-V_wXgI7mGySTka-Tm9N8ryp_82U",
  authDomain: "skynglobals.firebaseapp.com",
  projectId: "skynglobals",
  storageBucket: "skynglobals.firebasestorage.app",
  messagingSenderId: "916161429638",
  appId: "1:916161429638:web:ca86d829951d3d1e00d107",
  measurementId: "G-WN40DYDE10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };