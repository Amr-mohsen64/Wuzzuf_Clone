// get the query string in the URL
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let jobId =  params['job-id'];
var Apply = document.getElementById("Apply");
import {
initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
getFirestore,
addDoc,
collection,
onSnapshot,
getDoc,
doc,
setDoc,
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

async function test(){
const productDataDoc = await getDoc(doc(firestore, 'jobApplication', jobId));
console.log(productDataDoc.data());

Apply.innerHTML += `
<h5 class="text-dark fw-bold">${productDataDoc.data().titleJob}</h5>
<span style="color: rgb(77, 97, 130);font-size: 13px;letter-spacing: -0.3px;line-height: 20px;">The
    hiring team at ${productDataDoc.data().companyname} requires you to answer the below questions.</span> 
`;
}
test();
window.Submitapp= Submitapp
async function Submitapp()
{
    var msgPostion = document.getElementById("msgPostion").value;
    var sampleWork = document.getElementById("sampleWork").value;
    var startWorking = document.querySelector("input[name='startWorking']:checked").value;  
    var data={
        msgPostion:msgPostion,
        sampleWork:sampleWork,
        startWorking:startWorking,
        jobId:jobId
    }
    const applicationForm=await addDoc(collection(firestore,'applicationForm'),data);
    Clear();
}
function Clear()
{
    document.getElementById("msgPostion").value="";
    document.getElementById("sampleWork").value="";
   document.getElementById("inlineRadio1").value="";
    document.getElementById("inlineRadio2").value="";
}

