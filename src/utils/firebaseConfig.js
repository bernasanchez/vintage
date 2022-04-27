// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ2g41zmpKlxwqHq6ntNpkRiH6hfsJ9nI",
  authDomain: "vintage-14c73.firebaseapp.com",
  projectId: "vintage-14c73",
  storageBucket: "vintage-14c73.appspot.com",
  messagingSenderId: "757992694047",
  appId: "1:757992694047:web:4547a1e84b816a2a49902a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;