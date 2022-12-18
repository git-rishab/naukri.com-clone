let jsonData;
let filterData = [];
fetch("./Data/searchPage.json")
.then((rawData)=>{
    return rawData.json();
})
.then((originalData)=>{
    jsonData = originalData.data;

    let searchinp = localStorage.getItem("searchInp");
    let newArr = jsonData.filter((el, ind)=>{
        return el.name.toLowerCase().includes(searchinp);
    });

    filterData = newArr;
    createDOM(newArr);
    // createDOM(originalData.data);
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

// Live Search Functionality
let search = document.getElementById("searchInput");

search.addEventListener("input",(e)=>{
    let input = e.target.value;

    let newData = jsonData.filter((el, index) => {
      return el.name.toLowerCase().includes(input);
    });
    filterData = newData;
    createDOM(newData);
})


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
};

let salaryData;
let salaryApplied = false;

// Salary part
document.getElementById("S1").addEventListener("click", ()=>{

    for(let i = 0; i < document.getElementsByClassName("chk").length; i++){
        document.getElementsByClassName("chk")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk")[i].style.border = "1.5px solid black";

        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }

    document.getElementById("S1").style.backgroundColor = "#4a90e2";
    document.getElementById("S1").style.border = "1.5px solid #4a90e2";

    let newS1 = filterData.filter((el,ind)=>{
        if(el.salaryCode == 1){
            return true;
        }
        return false;
    });
    salaryApplied = true;
    salaryData = newS1;
    if(newS1.length == 0){
        result.innerHTML = null
        let msg = document.createElement("h2");
        msg.innerText = "No results found with given input :)";
        result.append(msg);
    } else {
        createDOM(newS1);
    }
    
});

document.getElementById("S2").addEventListener("click", ()=>{
    for(let i = 0; i < document.getElementsByClassName("chk").length; i++){
        document.getElementsByClassName("chk")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk")[i].style.border = "1.5px solid black";

        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("S2").style.backgroundColor = "#4a90e2";
    document.getElementById("S2").style.border = "1.5px solid #4a90e2";

    let newS2 = filterData.filter((el,ind)=>{
        if(el.salaryCode == 2){
            return true;
        }
        return false;
    });
    salaryData = newS2;
    salaryApplied = true;
    if(newS2.length == 0){
        result.innerHTML = null
        let msg = document.createElement("h2");
        msg.innerText = "No results found with given input :)";
        result.append(msg);
    } else {
        createDOM(newS2);
    }
    
});
document.getElementById("S3").addEventListener("click", ()=>{
    for(let i = 0; i < document.getElementsByClassName("chk").length; i++){
        document.getElementsByClassName("chk")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk")[i].style.border = "1.5px solid black";

        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("S3").style.backgroundColor = "#4a90e2";
    document.getElementById("S3").style.border = "1.5px solid #4a90e2";

    let newS3 = filterData.filter((el,ind)=>{
        if(el.salaryCode == 3){
            return true;
        }
        return false;
    });
    salaryData = newS3;
    salaryApplied = true;
    if(newS3.length == 0){
        result.innerHTML = null
        let msg = document.createElement("h2");
        msg.innerText = "No results found with given input :)";
        result.append(msg);
    } else {
        createDOM(newS3);
    }
    
});
document.getElementById("S4").addEventListener("click", ()=>{
    for(let i = 0; i < document.getElementsByClassName("chk").length; i++){
        document.getElementsByClassName("chk")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk")[i].style.border = "1.5px solid black";

        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("S4").style.backgroundColor = "#4a90e2";
    document.getElementById("S4").style.border = "1.5px solid #4a90e2";

    let newS4 = filterData.filter((el,ind)=>{
        if(el.salaryCode == 4){
            return true;
        }
        return false;
    });
    salaryData = newS4;
    salaryApplied = true;
    if(newS4.length == 0){
        result.innerHTML = null
        let msg = document.createElement("h2");
        msg.innerText = "No results found with given input :)";
        result.append(msg);
    } else {
        createDOM(newS4);
    }
    
});
document.getElementById("S5").addEventListener("click", ()=>{
    for(let i = 0; i < document.getElementsByClassName("chk").length; i++){
        document.getElementsByClassName("chk")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk")[i].style.border = "1.5px solid black";

        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("S5").style.backgroundColor = "#4a90e2";
    document.getElementById("S5").style.border = "1.5px solid #4a90e2";

    let newS5 = filterData.filter((el,ind)=>{
        if(el.salaryCode == 5){
            return true;
        }
        return false;
    });
    salaryData = newS5;
    salaryApplied = true;
    if(newS5.length == 0){
        result.innerHTML = null
        let msg = document.createElement("h2");
        msg.innerText = "No results found with given input :)";
        result.append(msg);
    } else {
        createDOM(newS5);
    }
    
});


// Experience Functionality

let experienceData;
let appliedExp = false;

document.getElementById("E1").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk1").length; i++){
        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";
        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("E1").style.backgroundColor = "#4a90e2";
    document.getElementById("E1").style.border = "1.5px solid #4a90e2";

    if(salaryApplied == true){
        let newE1 = salaryData.filter((el,ind)=>{
            if(el.experienceCode == "fresher"){
                return true;
            }
            return false;
        });
        experienceData = newE1;
        if(newE1.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE1);
        }
    } else {
        let newE1 = filterData.filter((el,ind)=>{
            if(el.experienceCode == "fresher"){
                return true;
            }
            return false;
        });
        
        experienceData = newE1;
        if(newE1.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE1);
        }
    }
    appliedExp = true;
});

document.getElementById("E2").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk1").length; i++){
        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("E2").style.backgroundColor = "#4a90e2";
    document.getElementById("E2").style.border = "1.5px solid #4a90e2";

    if(salaryApplied == true){
        let newE2 = salaryData.filter((el,ind)=>{
            if(el.experienceCode == "1"){
                return true;
            }
            return false;
        });
        experienceData = newE2;
        if(newE2.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE2);
        }
    } else {
        let newE2 = filterData.filter((el,ind)=>{
            if(el.experienceCode == "1"){
                return true;
            }
            return false;
        });
        experienceData = newE2;
        if(newE2.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE2);
        }
    }
    appliedExp = true;
});

document.getElementById("E3").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk1").length; i++){
        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("E3").style.backgroundColor = "#4a90e2";
    document.getElementById("E3").style.border = "1.5px solid #4a90e2";

    if(salaryApplied == true){
        let newE3 = salaryData.filter((el,ind)=>{
            if(el.experienceCode == "2"){
                return true;
            }
            return false;
        });
        experienceData = newE3;
        if(newE3.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE3);
        }
    } else {
        let newE3 = filterData.filter((el,ind)=>{
            if(el.experienceCode == "2"){
                return true;
            }
            return false;
        });
        experienceData = newE3;
        if(newE3.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE3);
        }
    }
    appliedExp = true;
});

document.getElementById("E4").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk1").length; i++){
        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("E4").style.backgroundColor = "#4a90e2";
    document.getElementById("E4").style.border = "1.5px solid #4a90e2";

    if(salaryApplied == true){
        let newE4 = salaryData.filter((el,ind)=>{
            if(el.experienceCode == "3"){
                return true;
            }
            return false;
        });
        experienceData = newE4;
        if(newE4.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE4);
        }
    } else {
        let newE4 = filterData.filter((el,ind)=>{
            if(el.experienceCode == "3"){
                return true;
            }
            return false;
        });
        experienceData = newE4;
        if(newE4.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE4);
        }
    }
    appliedExp = true;
});

document.getElementById("E5").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk1").length; i++){
        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }
    document.getElementById("E5").style.backgroundColor = "#4a90e2";
    document.getElementById("E5").style.border = "1.5px solid #4a90e2";

    if(salaryApplied == true){
        let newE5 = salaryData.filter((el,ind)=>{
            if(el.experienceCode == "4"){
                return true;
            }
            return false;
        });
        experienceData = newE5;
        if(newE5.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE5);
        }
    } else {
        let newE5 = filterData.filter((el,ind)=>{
            if(el.experienceCode == "4"){
                return true;
            }
            return false;
        });
        
        experienceData = newE5;
        if(newE5.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newE5);
        }
    }
    appliedExp = true;
});



// Location

document.getElementById("L1").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk2").length; i++){
        document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
    }
    document.getElementById("L1").style.backgroundColor = "#4a90e2";
    document.getElementById("L1").style.border = "1.5px solid #4a90e2";

    if(appliedExp == true){
        let newL1 = experienceData.filter((el,ind)=>{
            if(el.loc == "bangalore"){
                return true;
            }
            return false;
        });
        
        if(newL1.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL1);
        }
    } else {
        let newL1 = filterData.filter((el,ind)=>{
            if(el.loc == "bangalore"){
                return true;
            }
            return false;
        });
        
        
        if(newL1.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL1);
        }
    }
 
});

document.getElementById("L2").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk2").length; i++){
        document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
    }
    document.getElementById("L2").style.backgroundColor = "#4a90e2";
    document.getElementById("L2").style.border = "1.5px solid #4a90e2";

    if(appliedExp == true){
        let newL2 = experienceData.filter((el,ind)=>{
            if(el.loc == "noida"){
                return true;
            }
            return false;
        });
        
        if(newL2.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL2);
        }
    } else {
        let newL2 = filterData.filter((el,ind)=>{
            if(el.loc == "noida"){
                return true;
            }
            return false;
        });
        
        
        if(newL2.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL2);
        }
    }
 
});

document.getElementById("L3").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk2").length; i++){
        document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
    }
    document.getElementById("L3").style.backgroundColor = "#4a90e2";
    document.getElementById("L3").style.border = "1.5px solid #4a90e2";

    if(appliedExp == true){
        let newL3 = experienceData.filter((el,ind)=>{
            if(el.loc == "kolkata"){
                return true;
            }
            return false;
        });
        
        if(newL3.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL3);
        }
    } else {
        let newL3 = filterData.filter((el,ind)=>{
            if(el.loc == "kolkata"){
                return true;
            }
            return false;
        });
        
        
        if(newL3.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL3);
        }
    }
 
});

document.getElementById("L4").addEventListener("click", ()=>{
    
    for(let i = 0; i < document.getElementsByClassName("chk2").length; i++){
        document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
    }
    document.getElementById("L4").style.backgroundColor = "#4a90e2";
    document.getElementById("L4").style.border = "1.5px solid #4a90e2";

    if(appliedExp == true){
        let newL4 = experienceData.filter((el,ind)=>{
            if(el.loc == "others"){
                return true;
            }
            return false;
        });
        
        if(newL4.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL4);
        }
    } else {
        let newL4 = filterData.filter((el,ind)=>{
            if(el.loc == "others"){
                return true;
            }
            return false;
        });
        
        
        if(newL4.length == 0){
            result.innerHTML = null
            let msg = document.createElement("h2");
            msg.innerText = "No results found with given input :)";
            result.append(msg);
        } else {
            createDOM(newL4);
        }
    }
 
});


// Clear Filter

let clear = document.getElementById("filBtn");
clear.addEventListener("click",()=>{

    // Removing colors from all buttons
    for(let i = 0; i < document.getElementsByClassName("chk").length; i++){
        document.getElementsByClassName("chk")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk")[i].style.border = "1.5px solid black";

        document.getElementsByClassName("chk1")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk1")[i].style.border = "1.5px solid black";

        // Removing bg from location
        if(i < 4){
            document.getElementsByClassName("chk2")[i].style.backgroundColor = "#fff";
            document.getElementsByClassName("chk2")[i].style.border = "1.5px solid black";
        }
    }

    createDOM(filterData);
    
});



// Sorting Functionality

document.getElementById("sort1").addEventListener("click",()=>{

    for(let i = 0; i < document.getElementsByClassName("chk3").length; i++){
        document.getElementsByClassName("chk3")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk3")[i].style.border = "1.5px solid black";
    }
    document.getElementById("sort1").style.backgroundColor = "#4a90e2";
    document.getElementById("sort1").style.border = "1.5px solid #4a90e2";


    let newSort1 = filterData.sort((a,b)=> a.dateCode - b.dateCode);
    createDOM(newSort1);

});

document.getElementById("sort2").addEventListener("click",()=>{

    for(let i = 0; i < document.getElementsByClassName("chk3").length; i++){
        document.getElementsByClassName("chk3")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk3")[i].style.border = "1.5px solid black";
    }
    document.getElementById("sort2").style.backgroundColor = "#4a90e2";
    document.getElementById("sort2").style.border = "1.5px solid #4a90e2";


    let newSort2 = filterData.sort((a,b)=> b.salaryCodeSort - a.salaryCodeSort);
    createDOM(newSort2);

});

document.getElementById("sort3").addEventListener("click",()=>{

    for(let i = 0; i < document.getElementsByClassName("chk3").length; i++){
        document.getElementsByClassName("chk3")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("chk3")[i].style.border = "1.5px solid black";
    }
    document.getElementById("sort3").style.backgroundColor = "#4a90e2";
    document.getElementById("sort3").style.border = "1.5px solid #4a90e2";

    // let newData = arr.sort((a, b) => +b.price - +a.price);
    //   appendData(newData);

    let newSort3 = filterData.sort((a,b)=> b.rateCode - a.rateCode);
    createDOM(newSort3);

});
