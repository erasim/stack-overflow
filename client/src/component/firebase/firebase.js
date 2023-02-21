import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyARbr8x96O3GqLq9_zA00qmBa6UcFzAiP0",
    authDomain: "work-day-4e86c.firebaseapp.com",
    projectId: "work-day-4e86c",
    storageBucket: "work-day-4e86c.appspot.com",
    messagingSenderId: "1037918472704",
    appId: "1:1037918472704:web:542d9e3fce94f5873b66e5",
    measurementId: "G-TGCD0N6SRP"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;