// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiKGPt8VHo1DJKDq_Lm2C1LjQ-RMZx7iA",
  authDomain: "flowcrastinate-ed79d.firebaseapp.com",
  projectId: "flowcrastinate-ed79d",
  storageBucket: "flowcrastinate-ed79d.appspot.com",
  messagingSenderId: "644810916668",
  appId: "1:644810916668:web:479fc8d09045ea00a71439"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} 
else {
  app = firebase.app()
}

const auth = firebase.auth();

export { auth };