import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUXEyQxGn1dcHXCvTAZECWMuB--WIBRBk",
    authDomain: "whatsapp-clone-3678b.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-3678b.firebaseio.com",
    projectId: "whatsapp-clone-3678b",
    storageBucket: "whatsapp-clone-3678b.appspot.com",
    messagingSenderId: "968716601214",
    appId: "1:968716601214:web:80d7a891a16e1df0cc152f",
    measurementId: "G-1471DP91DC"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
