import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTE4VL-eurU5QX6zyqHBeoVzrav8Go3IU",
  authDomain: "messanger-b0893.firebaseapp.com",
  projectId: "messanger-b0893",
  storageBucket: "messanger-b0893.appspot.com",
  messagingSenderId: "365386786612",
  appId: "1:365386786612:web:315eef81cd8363bce3a761",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
