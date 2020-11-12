import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'
// import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBKMmRWmP_nkqVHKtF2dux-siMQTGhgVUs",
	authDomain: "photo-gallery-788dc.firebaseapp.com",
	databaseURL: "https://photo-gallery-788dc.firebaseio.com",
	projectId: "photo-gallery-788dc",
	storageBucket: "photo-gallery-788dc.appspot.com",
	messagingSenderId: "771890251768",
	appId: "1:771890251768:web:39757a506d5e5e2c0e780d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.database().ref().child('charts')
// console.log(db)
// db.on('value', snap => console.log(snap.val()))
// db.update({'5': 10})

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFirestore, timestamp}