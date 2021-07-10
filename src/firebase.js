import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCiGtaNt2NmwBuYeSsOfK8TC02pQ__x4Vc",
        authDomain: "react-messenger-app-eaefc.firebaseapp.com",
        projectId: "react-messenger-app-eaefc",
        storageBucket: "react-messenger-app-eaefc.appspot.com",
        messagingSenderId: "213034368021",
        appId: "1:213034368021:web:57186c21d708f5b040221c",
        measurementId: "G-YZVLS5C99T"
});

const db = firebaseApp.firestore();

export default db;