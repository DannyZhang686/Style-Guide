import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCmwMlzXcZtnm8xDsOv0A_CTEgUXeiZfvU",
  authDomain: "styleguidehtn.firebaseapp.com",
  projectId: "styleguidehtn",
  storageBucket: "styleguidehtn.appspot.com",
  messagingSenderId: "1015408759120",
  appId: "1:1015408759120:web:41da1f65671c4b70cc5c55"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
