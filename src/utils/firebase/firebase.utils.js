import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlGe727NP2vsxze4wmGKvhZcvyqxhVpXM",
  authDomain: "crwn-clothing-db-54cd7.firebaseapp.com",
  projectId: "crwn-clothing-db-54cd7",
  storageBucket: "crwn-clothing-db-54cd7.appspot.com",
  messagingSenderId: "1033326952354",
  appId: "1:1033326952354:web:d89615142bca4b05effcfb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);