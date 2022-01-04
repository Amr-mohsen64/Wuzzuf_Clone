var ListOfJob = document.getElementById("listOfJobs");
var listSaved = document.getElementById("listSaved");
var newreq = new XMLHttpRequest();

newreq.open("GET", "./job.json");

newreq.addEventListener("readystatechange", function () {
    if (newreq.readyState === 4 && newreq.status === 200) {
        var data = JSON.parse(newreq.responseText);
        var jobData = data["job"];
        displayCard(jobData);
    }
});

function displayCard(jobData) {
    jobData.forEach((element) => {
        ListOfJob.innerHTML += `  
    <div class="job__detail bg-body card bx-1 bt-1 mb-3">
    <header class="job__description d-flex justify-content-between border-bottom mx-2 pb-2">
        <div class="card-body">
            <div>
                <span class="app_blue_color"> ${element.title} </span>
                <i class="badge text-secondary bg-light fw-light"> ${element.jobTime}</i>
                <p>
                    <a href="#company"> <small class="text-dark fw-normal">${element.company}</small> </a>
                    <span>-</span>
                    <a href="#location"> <small class="text-secondary "> ${element.address}</small></a>
                </p>

            </div>
            <div class="text-secondary fs-6">
                <small>
                    ${element.description}
                </small>
                <time class="text-success">${element.deadline}</time>
            </div>
        </div>
        <a href="#company" class="mt-4">
            <img src="../imgs/company_job/${element.image}" alt="" width="75px">
        </a>
    </header>
    <div class="job__reacts d-flex align-items-center ps-3 mt-1 text-secondary">
        <button class="btn   text-secondary hovering_btn"> <i class="far fa-bookmark"></i> 
        Save</button>
        <button class="btn   text-secondary hovering_btn"> <i class="fas fa-share"></i> Share</button>
        <button class="btn   text-secondary hovering_btn"> <i class="far fa-eye-slash"></i> Hide</button>

    </div>
</div>
    `;
    });
}

newreq.send(" ");