// ---------------------------------------------------------------------------------------------------
// Authentication
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfeDYHwqseDZAoPxGMzqI8gN9axq1RfP8",
  authDomain: "wuzzuf-project.firebaseapp.com",
  projectId: "wuzzuf-project",
  storageBucket: "wuzzuf-project.appspot.com",
  messagingSenderId: "468922707390",
  appId: "1:468922707390:web:fc1f9417234a4487fc9def",
  measurementId: "G-8GSMJ17PT4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    onSnapshot(collection(firestore, "Users"), (snapshot) => {
      snapshot.forEach((doc) => {
        ShowData(doc);
      });
    });

    function ShowData(User) {
      var UserData = User.data();
      console.log(UserData.Email);
      console.log(UserData.Email == user.email)
      console.log(document.getElementById("UserNameSpan"))
      if (UserData.Email == user.email) {
        document.getElementById("UserNameSpan").innerHTML += UserData.FirstName + " " + UserData.LastName ;
        document.getElementById("EmailSpan").innerHTML += UserData.Email ;
      }
    }
  } else {
    location.assign("../index.html");
  }
});

window.Logout = Logout;
function Logout() {
  signOut(auth);
}