fetch("./Data/userDashboard.json")
.then((rawData)=>{
    return rawData.json();
})
.then((originalData)=>{
    createDOM(originalData.data);
})
.catch((er)=>{
    console.log("error");
})

let statusData = JSON.parse(localStorage.getItem("applied")) || [];
let savedData = JSON.parse(localStorage.getItem("saved")) || [];
let userData = JSON.parse(localStorage.getItem("userDetails")) || [];

let recom = document.getElementById("recom");
let jobStatus = document.getElementById("status");
let saved = document.getElementById("saved");
let user = document.getElementById("userData");

function createDOM(arr) {
    // result.innerHTML = null;

    arr.forEach(el => {
        let bigDiv = document.createElement("div");
        bigDiv.setAttribute("class", "bigDiv");
        bigDiv.setAttribute("onclick","location.href=`./productPage.html`")
        
        let head = document.createElement("p");
        head.setAttribute("class","head");

        let p1 = document.createElement("p");
        p1.setAttribute("class","p1");

        let info = document.createElement("div");
        info.setAttribute("class", "info");

        let rating = document.createElement("span");
        let star = document.createElement("img");
        star.setAttribute("src","//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg");

        let exp = document.createElement("span");
        
        
        let salary = document.createElement("span");
        let location = document.createElement("span");
        let p2 = document.createElement("p");
        p2.setAttribute("class", "p2");
        let doc = document.createElement("img");
        doc.setAttribute("src", "./Photos/google-docs.png");
        doc.setAttribute("class", "infos3")

        let div = document.createElement("div");
        let date = document.createElement("div");
        date.setAttribute("class","date");
        let span = document.createElement("span");
        let rupee = document.createElement("p");

        let work = document.createElement("img");
        work.setAttribute("src", "./Photos/work.png");
        work.setAttribute("class", "infos")

        let loc = document.createElement("img");
        loc.setAttribute("src", "./Photos/locatoin.png");
        loc.setAttribute("class", "infos2")

        for(let i = 0; i < el.skills.length; i++){
            let div2 = document.createElement("div");
            let span = document.createElement("span");
            span.innerText = "• " + el.skills[i];
            span.style.color = "#536777";
            div2.append(span);
            if(i > 0){
                div2.style.marginLeft = "18px"
            }
            div.append(div2);
        }

        bigDiv.addEventListener("click", ()=>{
            localStorage.setItem("job", JSON.stringify(el));
        });

        rupee.innerText = "₹";
        head.innerText = el.name;
        p1.innerText = el.p1;
        rating.innerText = el.rating;
        exp.innerText = el.experience;
        salary.innerText = el.salary;
        location.innerText = el.location;
        p2.innerText = el.p2;
        span.innerText = el.date;
        
        
        div.style.width = "100%"
        div.style.display = "flex";
        p2.style.color = "#536777";
        salary.style.color = "#536777";
        exp.style.color = "#536777";
        location.style.color = "#536777";
        span.style.color = "#091e42";
        span.style.fontSize = "10px"
        rupee.style.display = "inline"
        rupee.style.fontSize = "20px"
        rupee.style.margin = "0px 5px 0px 20px"
        
        
        info.append(work,exp,rupee,salary,loc,location);
        date.append(span);
        bigDiv.append(head,p1,rating,star,info,doc,p2,div,date);
        recom.append(bigDiv);
    });
};

function createStatus(arr) {
    jobStatus.innerHTML = null;

    let head = document.createElement("p");
    head.setAttribute("class","recom_p");
    head.innerText = "Jobs Application Status";
    jobStatus.append(head);

    if(arr.length == 0){
        let bigDiv1 = document.createElement("div");
        
        let p = document.createElement("p");
        p.innerText = "Not Applied for any Job(s) Yet"
        bigDiv1.append(p);
        jobStatus.append(bigDiv1);
        return;
    }

    arr.forEach((el,ind)=>{
        let bigDiv = document.createElement("div");
        bigDiv.setAttribute("class", "bigDiv");
        bigDiv.setAttribute("onclick","location.href=`./productPage.html`");
        
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let h5 = document.createElement("h5");
        let p1 = document.createElement("p");
        
        let loc = document.createElement("img");
        loc.setAttribute("src", "./Photos/locatoin.png");
        let p2 = document.createElement("span");

        let span = document.createElement("span");

        h5.innerText = el.name;
        p1.innerText = el.p1;
        p2.innerText = el.location;
        span.innerText = "Applied"

        div1.append(h5,p1,loc,p2);
        div2.append(span);
        bigDiv.append(div1,div2);
        jobStatus.append(bigDiv);
    });
}

function createSaved(arr) {
    saved.innerHTML = null;

    let head = document.createElement("p");
    head.setAttribute("class","recom_p");
    head.innerText = "Saved Job(s)";
    saved.append(head);

    if(arr.length == 0){
        let bigDiv1 = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = "No Saved Job(s) to Show"
        bigDiv1.append(p);
        saved.append(bigDiv1);
        return;
    }

    arr.forEach((el,ind)=>{
        let bigDiv = document.createElement("div");
        bigDiv.setAttribute("class", "bigDiv");
        bigDiv.setAttribute("onclick","location.href=`./productPage.html`");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let h5 = document.createElement("h5");
        let p1 = document.createElement("p");
        
        let loc = document.createElement("img");
        loc.setAttribute("src", "./Photos/locatoin.png");
        let p2 = document.createElement("span");

        let span = document.createElement("span");

        h5.innerText = el.name;
        p1.innerText = el.p1;
        p2.innerText = el.location;
        span.innerText = "Saved"

        div1.append(h5,p1,loc,p2);
        div2.append(span);
        bigDiv.append(div1,div2);
        saved.append(bigDiv);
    });
    
}

function createUser(details) {
    user.innerHTML = null;

    let name = document.createElement("h3");
    let work = document.createElement("p");
    work.setAttribute("class", "recom_p");
    let h5 = document.createElement("h4");

    let email = document.createElement("span");
    email.setAttribute("class", "recom_p");
    let emailIcon = document.createElement("img");
    emailIcon.setAttribute("src", "./Photos/email.png");

    let number = document.createElement("span");
    number.setAttribute("class", "recom_p");
    let numberIcon = document.createElement("img");
    numberIcon.setAttribute("src", "./Photos/phone.png");
    let br = document.createElement("br");

    // Performance part
    let bigDiv = document.createElement("div");
    bigDiv.setAttribute("class","userDiv");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let perform = document.createElement("p");
    perform.setAttribute("class","per")
    let p1 = document.createElement("p");
    p1.setAttribute("class", "num_p");
    let num1 = document.createElement("p");
    num1.setAttribute("class", "num");
    let p2 = document.createElement("p");
    p2.setAttribute("class", "num_p");
    let num2 = document.createElement("p");
    num2.setAttribute("class", "num");

    num1.innerText = "8";
    num2.innerText = "0";
    perform.innerText = "Profile Performance";
    p1.innerText = "Search Appearances"
    p2.innerText = "Recruiter Actions"

    div1.append(num1,p1);
    div2.append(num2,p2);
    bigDiv.append(div1,div2);

    // Booster Part
    let boost = document.createElement("div");
    boost.setAttribute("class","boost");
    let boostp = document.createElement("p");
    let boostp2 = document.createElement("p");

    boostp.innerText = "3X Boost to Your Profile Performance. Explore.";
    boostp2.innerText = "Paid Service";
    boostp.setAttribute("class", "boost_p");
    boostp.setAttribute("onclick","location.href=`./paymentPage.html`");
    boostp2.setAttribute("class", "boost_p2")
    boost.append(boostp,boostp2);

    // LogOut Part
    let logOut = document.createElement("button");
    logOut.setAttribute("id","logout");
    logOut.innerText = "Sign Out";

    logOut.addEventListener("click",()=>{

        localStorage.removeItem("saved");
        localStorage.removeItem("applied");
        localStorage.removeItem("userDetails");
        localStorage.removeItem("subscriber");
        localStorage.setItem("signedin", false);
        localStorage.removeItem("job");

        if(window.confirm("Are you Sure, You Want to Sign Out?")){
            // action you want to perform
            window.open(`./index.html`,"_self")
        }
    });

    name.innerText = details.name;
    work.innerText = details.work;
    h5.innerText = "Contact Details";
    email.innerText = details.email;
    number.innerText = details.number;

    user.append(name,work,h5,emailIcon,email,br,numberIcon,number,perform,bigDiv,boost,logOut);
}

if(localStorage.getItem("subscriber") == "true"){
    document.getElementById("subtext").innerText = "SUBSCRIBER";
    document.getElementById("sub").style.border = "1px solid lightgreen";
    document.getElementById("subtext").style.color = "lightgreen";
}else{
    document.getElementById("subtext").innerText = "NOT SUBSCRIBED";
    document.getElementById("sub").style.border = "1px solid red";
    document.getElementById("sub").style.color = "red";
}

createStatus(statusData);
createSaved(savedData);
createUser(userData);



function search() {
    
    let inp = document.getElementById("searchInput");
    localStorage.setItem("searchInp", inp.value);
}