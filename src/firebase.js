import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAhlGowOQNsytQXugFUXC7qXTJDJYd9F2Q",
    authDomain: "linkedin-clone-yt-962e0.firebaseapp.com",
    projectId: "linkedin-clone-yt-962e0",
    storageBucket: "linkedin-clone-yt-962e0.appspot.com",
    messagingSenderId: "623767000977",
    appId: "1:623767000977:web:0d583f182c5aecfa346c30"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };