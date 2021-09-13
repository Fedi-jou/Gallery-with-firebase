import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq2robrcjxReuGAYEgUUha11yLUhx_Oe0",
  authDomain: "firegram-98ecc.firebaseapp.com",
  projectId: "firegram-98ecc",
  storageBucket: "firegram-98ecc.appspot.com",
  messagingSenderId: "448206655364",
  appId: "1:448206655364:web:3e1c0331d8bfcc89ce57d1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectstorage = firebase.storage();
const projectfirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectstorage, projectfirestore, timestamp };
