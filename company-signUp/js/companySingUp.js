window.signUp = signUp;

function signUp(ev) {
   ev.preventDefault();
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   try {
      Register(email, password);
   } catch{
      alert("wrong");
   }
}

import {
   initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
   getAuth,
   createUserWithEmailAndPassword,
   onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import {
   getFirestore,
   addDoc,
   collection
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
   apiKey: "AIzaSyDfeDYHwqseDZAoPxGMzqI8gN9axq1RfP8",
   authDomain: "wuzzuf-project.firebaseapp.com",
   projectId: "wuzzuf-project",
   storageBucket: "wuzzuf-project.appspot.com",
   messagingSenderId: "468922707390",
   appId: "1:468922707390:web:fc1f9417234a4487fc9def",
   measurementId: "G-8GSMJ17PT4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore(app);

function Register(email, password) {
   createUserWithEmailAndPassword(auth, email, password).then(() => {
      addtoFireStore()
      .then(location.assign("https://console.firebase.google.com/project/wuzzuf-project/authentication/users"))
 

   }).catch((error) => {
      console.log(error.message);
   })
}

  //    onAuthStateChanged(auth,(companyUser)=>{
   //       if(companyUser){
            
   //       }
         
   //   })

window.addtoFireStore = addtoFireStore;
async function addtoFireStore() {
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var data = {
      email: email,
      name: null
   }
   await addDoc(collection(firestore, 'company'), data);

}