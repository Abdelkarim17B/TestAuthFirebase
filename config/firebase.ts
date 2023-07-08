// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgU_p7t7NoGaSemy_UCz0_pP2paVElgdc",
  authDomain: "atlas-marketspace.firebaseapp.com",
  projectId: "atlas-marketspace",
  storageBucket: "atlas-marketspace.appspot.com",
  messagingSenderId: "362143605512",
  appId: "1:362143605512:web:0b4278be09d53b798582bd",
  measurementId: "G-8N3Z68TZCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;