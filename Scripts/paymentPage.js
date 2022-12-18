
let signedIn = localStorage.getItem("signedin");
let hire = document.getElementById("hiring");
let spons = document.getElementById("sponsored");
let growCareer = document.getElementById("grow");

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


// Event Listeners

document.getElementById("plan1").addEventListener("click",()=>{

    for( let i = 0; i < document.getElementsByClassName("plans").length; i++){

        document.getElementsByClassName("plans")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("plans")[i].style.border = "1px solid black";
    }
    localStorage.setItem("plan","859");
    document.getElementById("plan1").style.backgroundColor = "#f8f8f8";
    document.getElementById("plan1").style.border = "3px solid #457eff";
});

document.getElementById("plan2").addEventListener("click",()=>{

    for( let i = 0; i < document.getElementsByClassName("plans").length; i++){

        document.getElementsByClassName("plans")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("plans")[i].style.border = "1px solid black";
    }
    localStorage.setItem("plan","2047");
    document.getElementById("plan2").style.backgroundColor = "#f8f8f8";
    document.getElementById("plan2").style.border = "3px solid #457eff";
});

document.getElementById("plan3").addEventListener("click",()=>{

    for( let i = 0; i < document.getElementsByClassName("plans").length; i++){

        document.getElementsByClassName("plans")[i].style.backgroundColor = "#fff";
        document.getElementsByClassName("plans")[i].style.border = "1px solid black";
    }
    localStorage.setItem("plan","3025");
    document.getElementById("plan3").style.backgroundColor = "#f8f8f8";
    document.getElementById("plan3").style.border = "3px solid #457eff";
});


// Buy Now Button
