import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYAKHEkQVrapUUqlDSPV9EkbekonhaFMw",
    authDomain: "schat-a0111.firebaseapp.com",
    databaseURL: "https://schat-a0111.firebaseio.com",
    projectId: "schat-a0111",
    storageBucket: "schat-a0111.appspot.com",
    messagingSenderId: "849840145933",
    appId: "1:849840145933:web:17f1e922c492d40018f744",
    measurementId: "G-5Z2M0DJRWD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


export default firebase