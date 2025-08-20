// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABsiJgG8jw5MgmCO3lWRIZm2sP4Q_LPdQ",
  authDomain: "merry-berry-acfcc.firebaseapp.com",
  projectId: "merry-berry-acfcc",
  storageBucket: "merry-berry-acfcc.firebasestorage.app",
  messagingSenderId: "535653547655",
  appId: "1:535653547655:web:9de90b35073c52328ec222",
  measurementId: "G-ZS2Q4VLVX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);