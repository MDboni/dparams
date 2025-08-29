
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcNfref7Jv6fRn5yKBhZh1OD8DWR6syFE",
  authDomain: "all-practice-ad6ec.firebaseapp.com",
  projectId: "all-practice-ad6ec",
  storageBucket: "all-practice-ad6ec.firebasestorage.app",
  messagingSenderId: "993832731000",
  appId: "1:993832731000:web:4d066f640a94cfe4fcc88d",
  measurementId: "G-YVJ006D68V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth 