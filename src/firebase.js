import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB4vMi4jPT51truJu1Gd2xvfuw0Z6-spZo",
  authDomain: "todoist-51d9a.firebaseapp.com",
  databaseURL: "https://todoist-51d9a.firebaseio.com",
  projectId: "todoist-51d9a",
  storageBucket: "todoist-51d9a.appspot.com",
  messagingSenderId: "672466255516",
  appId: "1:672466255516:web:12a0073713b51678133759",
});

export { firebaseConfig as firebase };
