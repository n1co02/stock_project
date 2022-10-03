// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkhvdCc_xDVsqN_p80Vt2t0zrfZmT-0A4",
  authDomain: "stock-7b1de.firebaseapp.com",
  projectId: "stock-7b1de",
  storageBucket: "stock-7b1de.appspot.com",
  messagingSenderId: "713459671600",
  appId: "1:713459671600:web:e6fc073b436b3b1bf7c3f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
