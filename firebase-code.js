
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFVASLikevI6aElIlu7fTJkJRguC0Yzhk",
    authDomain: "title-views-b2c2f.firebaseapp.com",
    databaseURL: "https://title-views-b2c2f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "title-views-b2c2f",
    storageBucket: "title-views-b2c2f.appspot.com",
    messagingSenderId: "191391074603",
    appId: "1:191391074603:web:c8feaa13a7e81fe4175d6e",
    measurementId: "G-WC5RZ7LF0N"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebaseConfig.initializeApp(firebaseConfig);

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('views');
dbRef.on('value', snap => bigOne.innerText = snap.val());
