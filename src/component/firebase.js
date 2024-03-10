// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsl8hArD4OwSZUClHtEkgyxiGpPSiHtrI",
  authDomain: "to-do-list-3f35b.firebaseapp.com",
  projectId: "to-do-list-3f35b",
  storageBucket: "to-do-list-3f35b.appspot.com",
  messagingSenderId: "663742315434",
  appId: "1:663742315434:web:4e94551b27c5c43f46c9d3",
  measurementId: "G-SYLL9J2HNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);