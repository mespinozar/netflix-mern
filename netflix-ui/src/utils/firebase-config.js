import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCjHcL97m7SRp-H-0jEo2BP7CCDwXoQdYU",
  authDomain: "netflix-mern-d7ccb.firebaseapp.com",
  projectId: "netflix-mern-d7ccb",
  storageBucket: "netflix-mern-d7ccb.appspot.co",
  messagingSenderId: "241131005490",
  appId: "1:241131005490:web:ea9ba28ce577d57546fe2b",
  
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
