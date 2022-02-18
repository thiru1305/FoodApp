// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5ZMu5Lpc3-FGXK9jeso_79cB83zNO-Ww",
  authDomain: "fir-foodapp-1cd9e.firebaseapp.com",
  projectId: "fir-foodapp-1cd9e",
  storageBucket: "fir-foodapp-1cd9e.appspot.com",
  messagingSenderId: "179997994327",
  appId: "1:179997994327:web:e23af307e1a4adb713a212",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
