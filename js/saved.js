var ListOfJob = document.getElementById("listSaved");
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

const q = query(collection(firestore, "jobApplication"), where("saved", "==", true));
onSnapshot(q, (job) => {
    ListOfJob.innerHTML = ""
    document.getElementById('jobNumSaved').innerHTML=job.size
    job.forEach((doc) => {
        displayCard(doc);
    });
});



//display dynamic card from db
function displayCard(jobData) {
    var JobtDatas = jobData.data(jobData);
    ListOfJob.innerHTML += `  
        <div class="job__detail bg-body card bx-1 bt-1 mb-3">
            <header class="job__description d-flex justify-content-between border-bottom mx-2 pb-2">
                <div class="card-body">
                    <div>
                        <span class="app_blue_color">${JobtDatas.titleJob}</span>
                        <i class="badge text-secondary bg-light fw-light"> ${JobtDatas.timeJob}</i>
                        <p>
                            <a href="#company"> <small class="text-dark fw-normal">${JobtDatas.companyname}</small>
                            </a>
                            <span>-</span>
                            <a href="#location">
                                <small class="text-secondary ">${JobtDatas.Country} , ${JobtDatas.city}</small>
                            </a>
                        </p>

                    </div>
                    <div class="text-secondary fs-6">
                        <small>
                        ${JobtDatas.categories} . ${JobtDatas.titleJob} . ${JobtDatas.experience} 
                        </small>
                        <time class="text-success">in 7 days</time>
                    </div>
                </div>
                <a href="#company" class="mt-4">
                    <img src="../imgs/company_job/1.png" alt="" width="75px">
                </a>
            </header>
        <div class="job__reacts d-flex align-items-center ps-3 mt-1 text-secondary">
            <button class="btn  hovering_btn" onclick=handleUnSave('${jobData.id}')> <i class="fas fa-bookmark"></i>
                UnSave</button>
            <button class="btn   text-secondary hovering_btn"> <i class="fas fa-share"></i>
                Share</button>

        </div>
    </div>
    `;
}

//handle unsave btn
window.handleUnSave = handleUnSave
function handleUnSave(jobId) {
    let btn = event.target
    console.log(btn);
    const jobRef = doc(firestore, 'jobApplication', jobId);
    setDoc(jobRef, {saved: false}, {merge: true});
    alert("Unsaved")
}