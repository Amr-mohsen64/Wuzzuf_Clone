import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  onSnapshot,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyDfeDYHwqseDZAoPxGMzqI8gN9axq1RfP8",
  authDomain: "wuzzuf-project.firebaseapp.com",
  projectId: "wuzzuf-project",
  storageBucket: "wuzzuf-project.appspot.com",
  messagingSenderId: "468922707390",
  appId: "1:468922707390:web:fc1f9417234a4487fc9def",
  measurementId: "G-8GSMJ17PT4",
};
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
// get data from
window.CreateCollectionJOB = CreateCollectionJOB;
async function CreateCollectionJOB() {
  var categories = document.getElementById("categories").value;
  var timeJob = document.getElementById("timeJob").value;
  var experience = document.getElementById("experience").value;
  var city = document.getElementById("city").value;
  var Country = document.getElementById("Country").value;
  var companyname = document.getElementById("companyname").value;
  var titleJob = document.getElementById("nameOfjob").value;
  var data = {
    companyname: companyname,
    categories: categories,
    timeJob: timeJob,
    experience: experience,
    city: city,
    Country: Country,
    titleJob: titleJob,
  };
  console.log(data);

  const job = await addDoc(collection(firestore, "jobApplication"), data);

  Clear();
}

function Clear() {
  document.getElementById("categories").value = "";
  document.getElementById("timeJob").value = "";
  document.getElementById("experience").value = "";
  document.getElementById("city").value = "";
  document.getElementById("Country").value = "";
  document.getElementById("companyname").value = "";
  document.getElementById("nameOfjob").value = "";
}
