/* Firebase Configuration */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAymtLrQhgXbiCyinbgi81RwrnsTaKXVWg",
  authDomain: "simple-firebase-auth-7175f.firebaseapp.com",
  projectId: "simple-firebase-auth-7175f",
  storageBucket: "simple-firebase-auth-7175f.appspot.com", // <-- FIXED
  messagingSenderId: "731465403955",
  appId: "1:731465403955:web:6e8f1ac729ff952856dd46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other files can use it
export { app, auth };
