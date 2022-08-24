// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcpFOHsgsBhkJpNkddCzOK7en57NIkwx8",
  authDomain: "chit-chat-d5ec4.firebaseapp.com",
  projectId: "chit-chat-d5ec4",
  storageBucket: "chit-chat-d5ec4.appspot.com",
  messagingSenderId: "609459926907",
  appId: "1:609459926907:web:d2478df06b811470a12fde",
  measurementId: "G-00JHPXSLKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);