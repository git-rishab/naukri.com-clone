let data = JSON.parse(localStorage.getItem("job")) || [];
let child1 = document.getElementById("child1");
let signedIn = localStorage.getItem("signedin");
let applied = JSON.parse(localStorage.getItem("applied")) || [];
let saved = JSON.parse(localStorage.getItem("saved")) || [];


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
    document.getElementById("search").style.marginLeft = "250px";
}


function createDOM(arr) {
    child1.innerHTML = null;

    let h1 = document.createElement("h1");

    let p = document.createElement("p");

    let rating = document.createElement("span");
    let star = document.createElement("img");
    star.setAttribute("src","//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg");
    let reviews = document.createElement("span");

    let work = document.createElement("img");
    work.setAttribute("src","./Photos/work.png");
    let exp = document.createElement("span");

    let rupee = document.createElement("img");
    rupee.setAttribute("src","./Photos/wallet.png");
    let salary = document.createElement("span");

    let loc = document.createElement("img");
    loc.setAttribute("src","./Photos/locatoin.png");
    let location = document.createElement("span");

    let div = document.createElement("div");

    if(signedIn == "true"){
        let apply = document.createElement("button");
        apply.setAttribute("id", "apply");
        apply.innerText = "Apply Now";
        let save = document.createElement("button");
        save.setAttribute("id", "save");
        save.innerText = "Save";
        div.append(save, apply);

        // Event Listener for Save
        save.addEventListener("click",()=>{

            let available = false;

            for(let i = 0; i < saved.length; i++){
                if(saved[i].name == arr.name){
                    available = true;
                }
            }

            if(!available){
                saved.push(arr);
                localStorage.setItem("saved",JSON.stringify(saved));
                save.innerText = "Saved";

                setTimeout(()=>{
                    alert("Saved Successfully");
                },10)

            } else {
                save.style.width = "150px";
                save.innerText = "Already Saved";
                alert("Already Saved");
            }
            
        });

        // Event Listener for Apply
        apply.addEventListener("click",()=>{

            let available = false;

            for(let i = 0; i < applied.length; i++){
                if(applied[i].name == arr.name){
                    available = true;
                }
            }

            if(!available){
                applied.push(arr);
                localStorage.setItem("applied",JSON.stringify(applied));
                apply.innerText = "Applied";

            } else {
                apply.style.width = "150px";
                apply.innerText = "Already Applied";
                alert("Already applied");
            }
        });

    } else {
        let register = document.createElement("button");
        register.setAttribute("id", "btn1");
        register.innerText = "Register to apply";
        register.setAttribute("onclick","location.href=`./registerPage.html`")
        let login = document.createElement("button");
        login.innerText = "LOGIN TO APPLY";
        login.setAttribute("id","btn2");
        login.setAttribute("onclick","location.href=`./loginPage.html`");
        div.append(register,login);
    }
    
    

    let line = document.createElement("div");

    let span1 = document.createElement("span");
    let span2 = document.createElement("span");

    let span3 = document.createElement("span");
    let span4 = document.createElement("span");

    let span5 = document.createElement("span");
    let span6 = document.createElement("span");

    let loginAndInfo = document.createElement("div"); 
    loginAndInfo.setAttribute("class", "loginAndInfo")
    let info = document.createElement("div")
    let infoChild1 = document.createElement("div");
    let infoChild2 = document.createElement("div");
    let infoChild3 = document.createElement("div");
    info.setAttribute("id", "info");
    
    h1.innerText = arr.name;
    p.innerText = arr.p1;
    rating.innerText = arr.rating;
    reviews.innerText = "(307 reviews)"
    exp.innerText = arr.experience;
    salary.innerText = arr.salary;
    location.innerText = arr.location;
    span1.innerText = "Posted: ";
    span2.innerText = arr.date;
    span3.innerText = "Openings: ";
    span4.innerText = "2";
    span5.innerText = "Job Applications: ";
    span6.innerText = "219";

    star.style.marginRight = "5px";
    reviews.style.color = "#333";
    reviews.style.fontSize = "12px";
    line.style.width = "95%";
    line.style.margin = "auto";
    line.style.margin = "18px 0px 18px 0px";
    line.style.borderTop = "0.1px solid #eee";
    span1.style.color = "#999";
    span3.style.color = "#999";
    span5.style.color = "#999";
    span3.style.marginLeft = "15px";
    span5.style.marginLeft = "15px";
    span2.style.fontSize = "12px";
    span4.style.fontSize = "12px";
    span1.style.fontSize = "12px";


    infoChild1.append(work,exp);
    infoChild2.append(rupee,salary);
    infoChild3.append(loc,location);

    info.append(infoChild1,infoChild2,infoChild3);

    
    loginAndInfo.append(info,div);
    child1.append(h1,p,rating,star,reviews,loginAndInfo,line,span1,span2,span3,span4,span5,span6);

}

createDOM(data);

function search() {
    
    let inp = document.getElementById("searchInput");
    localStorage.setItem("searchInp", inp.value);
}