import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAQ2d6W3c1EpZ27yNxaBp8p0yIRWOIb1uE",
  authDomain: "warzonetournament-247ef.firebaseapp.com",
  projectId: "warzonetournament-247ef",
  storageBucket: "warzonetournament-247ef.appspot.com",
  messagingSenderId: "350451124321",
  appId: "1:350451124321:web:2a40d2cb3c5245139cc220",
  measurementId: "G-2GMB0XHEP4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().useDeviceLanguage();

export default firebase;