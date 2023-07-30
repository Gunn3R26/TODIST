// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,signOut} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTQF_KchGLs4msJFPnT7RY0rgPI35qCgM",
  authDomain: "todist-b886f.firebaseapp.com",
  projectId: "todist-b886f",
  storageBucket: "todist-b886f.appspot.com",
  messagingSenderId: "745584151569",
  appId: "1:745584151569:web:48676f9e20aba4eae375b0",
  measurementId: "G-1PV6T8QJ9N"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, db,storage,  doc, getDoc, setDoc}