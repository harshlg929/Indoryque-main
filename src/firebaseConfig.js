// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0_trp-NNVa5oITeV9UxnXf464mrB0r08",
  authDomain: "alwaysentertaining.firebaseapp.com",
  projectId: "alwaysentertaining",
  storageBucket: "alwaysentertaining.firebasestorage.app",
  messagingSenderId: "225411759584",
  appId: "1:225411759584:web:92e22d05170001af9fbf85",
  measurementId: "G-XCCW8Y7GKG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth, db, analytics };
