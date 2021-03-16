import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCD1XancA6wFHr2vffWgIpoDOPWGmbZYjI",
    authDomain: "linkedin-clone-d4e0c.firebaseapp.com",
    projectId: "linkedin-clone-d4e0c",
    storageBucket: "linkedin-clone-d4e0c.appspot.com",
    messagingSenderId: "888409838274",
    appId: "1:888409838274:web:2aa1d27da241297bdea15b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) // to connect
const db = firebaseApp.firestore() // to get the data 
const auth = firebase.auth() // Get the Auth service for the default app

export { db, auth };