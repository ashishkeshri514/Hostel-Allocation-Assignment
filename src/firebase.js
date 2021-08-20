import firebase from 'firebase';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyDERTAIqrgMKV8uTwgOy-SxKOn71S1_cvU",
    authDomain: "hostel-allocation-assign.firebaseapp.com",
    databaseURL: "https://hostel-allocation-assign-default-rtdb.firebaseio.com",
    projectId: "hostel-allocation-assign",
    storageBucket: "hostel-allocation-assign.appspot.com",
    messagingSenderId: "675504148541",
    appId: "1:675504148541:web:fdccdb19be2d58a1e49a54"
})
export const auth = firebase.auth();
export default firebase;