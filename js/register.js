// -------------------------------------------------------------------------------------------
//Authentications
window.RegiterDone = RegiterDone;
function RegiterDone(event) {
  event.preventDefault();
  var FirstName = document.getElementById("validationCustom01").value;
  var LastName = document.getElementById("validationCustom02").value;
  var Email = document.getElementById("validationCustom03").value;
  var Password = document.getElementById("validationCustom04").value;
  try {
    Register(Email, Password, FirstName, LastName);
  } catch (e) {
    alert(e);
  }
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
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
const firestore = getFirestore(app);
const auth = getAuth();

function Register(Email, Password, FirstName, LastName) {
  createUserWithEmailAndPassword(auth, Email, Password, FirstName, LastName)
  .then(() => {
    AddUserDocument(Email, Password, FirstName, LastName)
    .then(
      (location.assign("../explore.html"))
    )
  })
    
    .catch((error) => {
      console.log(error.message);
    });
}


window.AddUserDocument = AddUserDocument;
async function AddUserDocument(Email, Password, FirstName, LastName) {
  console.log(Email, Password, FirstName, LastName);
  var data = {
    Email: Email,
    FirstName: FirstName,
    LastName: LastName,
    Birthday: null,
    Gender: null,
    MilitaryStatus: null,
    MaritalStatus: null,
    DrivingLicense: false,
  };
  await addDoc(collection(firestore, "Users"), data);
}
