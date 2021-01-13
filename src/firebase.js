 import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyBSY1h6odCXs3JqKZuKyu1pQIcLuKwZ3sA",
        authDomain: "snapchat-alike.firebaseapp.com",
        projectId: "snapchat-alike",
        storageBucket: "snapchat-alike.appspot.com",
        messagingSenderId: "416356479357",
        appId: "1:416356479357:web:5cb0f6a82d6a3e62e79c14"
      };
    
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider}; 