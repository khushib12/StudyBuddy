import * as firebase from "firebase";
import "firebase/firestore";

//using firebase for storing data

const firebaseConfig = {
  apiKey: "AIzaSyCsWLneAlSpMDtIQnsuALkYXPF9o43XQuo",
  authDomain: "classroom-41c5c.firebaseapp.com",
  projectId: "classroom-41c5c",
  storageBucket: "classroom-41c5c.appspot.com",
  messagingSenderId: "998118206169",
  appId: "1:998118206169:web:e9236a006b1361e1906cc8",
  measurementId: "G-QNL6CLT8ZY",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
