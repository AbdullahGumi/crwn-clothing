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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
  	if(!userAuth)return;

  	const userRef = firestore.doc(`users/${userAuth.uid}`);

  	const snapShot = await userRef.get();

  	if (!snapShot.exists) {
  		const { displayName, email } = userAuth;
  		const createdAt = new Date();

  		try{
  			await userRef.set({
  				displayName,
  				email,
  				createdAt,
  				...additionalData
  			})
  		}catch (error){
  			console.log('error creating user', error.message);
  		}
  	}
  	
  	return userRef;

  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
