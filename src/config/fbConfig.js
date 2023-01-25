// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEqZLXrPIfJm7sFUIAptphtdqWXF4aXiQ",
  authDomain: "book-stack-1717.firebaseapp.com",
  projectId: "book-stack-1717",
  storageBucket: "book-stack-1717.appspot.com",
  messagingSenderId: "27364583702",
  appId: "1:27364583702:web:8ffa69c4211366749dc837",
  measurementId: "G-VLQ288F3VL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.firestore(); // <- needed if using firestore

// export default firebaseConfig // exporting firebase so that it can be imported and used in any files
export default firebase