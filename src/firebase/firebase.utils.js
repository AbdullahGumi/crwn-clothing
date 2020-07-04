import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBL9H1-GEwYj-ZOrrj9os0TPmJv7fgHUm0",
    authDomain: "crown-clothing-52c10.firebaseapp.com",
    databaseURL: "https://crown-clothing-52c10.firebaseio.com",
    projectId: "crown-clothing-52c10",
    storageBucket: "crown-clothing-52c10.appspot.com",
    messagingSenderId: "664199942379",
    appId: "1:664199942379:web:71386b4959bc1b7d38aeae"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
