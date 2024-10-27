// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3KGNj7MtzVxDSWVSFdzoBuXCJ8hK0hMA",
  authDomain: "shoeclean-form.firebaseapp.com",
  projectId: "shoeclean-form",
  storageBucket: "shoeclean-form.appspot.com",
  messagingSenderId: "845342635178",
  appId: "1:845342635178:web:2fcd42faf5c2857eb80cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export {app,db};