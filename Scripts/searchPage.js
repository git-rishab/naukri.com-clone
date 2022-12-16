
fetch("./Data/searchPage.json")
.then((rawData)=>{
    return rawData.json();
})
.then((originalData)=>{
    createDOM(originalData.data);
})
.catch((er)=>{
    console.log("er");
})

let signedIn = localStorage.getItem("signedin");
let result = document.getElementById("results");

// Checking if SignedIn
if(signedIn == "true"){
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div2.setAttribute("onclick","location.href=`./userDashboard.html`");

    let bell = document.createElement("img");
    bell.setAttribute("src","./Photos/bell.png");
    let user = document.createElement("img");
    user.setAttribute("src","./Photos/user.png");

    div1.append(bell);
    div2.append(user);
    document.getElementById("login").append(div1,div2);
} else {
    let btn1 = document.createElement("button");
    btn1.setAttribute("id", "loginBtn");
    btn1.setAttribute("onclick", "location.href=`./loginPage.html`");

    let btn2 = document.createElement("button");
    btn2.setAttribute("id", "registerBtn");
    btn2.setAttribute("onclick", "location.href=`./registerPage.html`");

    btn1.innerText = "Login";
    btn2.innerText = "Register";

    document.getElementById("login").append(btn1,btn2);
}


function createDOM(arr) {
    result.innerHTML = null;

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
        result.append(bigDiv);
    });
}
