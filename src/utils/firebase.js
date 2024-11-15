// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZCe8wKFpmi0GiVY5JWNSKjYYQtUTMWBo",
  authDomain: "netflix-gpt-49520.firebaseapp.com",
  projectId: "netflix-gpt-49520",
  storageBucket: "netflix-gpt-49520.firebasestorage.app",
  messagingSenderId: "131612310383",
  appId: "1:131612310383:web:fd9286a629142a2295c69a",
  measurementId: "G-V23EWPG4GF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//authentication
export const auth = getAuth();
