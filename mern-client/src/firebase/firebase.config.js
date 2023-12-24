// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD24NY7jlhrRhvfqW_C94sGuNQT6CeU_MI",
  authDomain: "mern-book-inventory-a3aa7.firebaseapp.com",
  projectId: "mern-book-inventory-a3aa7",
  storageBucket: "mern-book-inventory-a3aa7.appspot.com",
  messagingSenderId: "293194463798",
  appId: "1:293194463798:web:1b226aaca7689afc917697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;