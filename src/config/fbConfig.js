import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "key",
    authDomain: "domain",
    databaseURL: "database",
    projectId: "schat-a0111",
    storageBucket: "schat",
    messagingSenderId: "1",
    appId: "1",
    measurementId: "1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


export default firebase