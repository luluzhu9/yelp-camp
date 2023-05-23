import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyAFxu45Q5ec4HY24F6vL3ztuJjbZlnhmuc",
    authDomain: "yelp-camp-ebdf1.firebaseapp.com",
    projectId: "yelp-camp-ebdf1",
    storageBucket: "yelp-camp-ebdf1.appspot.com",
    messagingSenderId: "125716182199",
    appId: "1:125716182199:web:ac357c0a4833bd7a89c932",
    measurementId: "G-YM5WS036XD"
};
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;