// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLaXf96b4mNLhl_--56d-Qlm9f9tSnnnk",
  authDomain: "merryberry-5934c.firebaseapp.com",
  projectId: "merryberry-5934c",
  storageBucket: "merryberry-5934c.firebasestorage.app",
  messagingSenderId: "460814970529",
  appId: "1:460814970529:web:125f8e3d29985fcc680ae0",
  measurementId: "G-108CP28SYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);