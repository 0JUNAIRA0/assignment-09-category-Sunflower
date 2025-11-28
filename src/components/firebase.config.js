/* Firebase Configuration */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyBrasdoVpRhXwD7gg8HfX3DYRfVATwvPOY",
  authDomain: "petcenter-56db9.firebaseapp.com",
  projectId: "petcenter-56db9",
  storageBucket: "petcenter-56db9.firebasestorage.app",
  messagingSenderId: "847246427926",
  appId: "1:847246427926:web:e7f037b0f1e571f45ef237",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other files can use it
export { app, auth };
