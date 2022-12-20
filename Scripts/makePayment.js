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

let total = document.getElementById("total");
let dis = document.getElementById("dis");
let gst = document.getElementById("gst");
let gt = document.getElementById("grandTotal");

let price = Number(localStorage.getItem("plan"));
total.innerText = price;

let discount = Math.ceil(((price * 30) / 100));
dis.innerText = discount;

let tax = Math.ceil(((price-discount) * 18) / 100);
gst.innerText = tax;

let grandtotal = ((price - discount) + tax);
gt.innerText = grandtotal;

let cont = document.getElementById("otp");

document.getElementById("pay").addEventListener("click",()=>{
    cont.innerHTML = null;
    alert("Your OTP is 123456");
    let h3 = document.createElement("h3");
    let inp = document.createElement("input");
    let btn = document.createElement("button");
    // let p = document.createElement("p");
    // let span = document.createElement("span");
    // p.innerText = "Enter OTP in"; 
    // span.innerText = "03:00" + " minutes";
    
    h3.innerText = "Enter OTP";
    inp.setAttribute("placeholder","xxx xxx");
    inp.setAttribute("type","number");
    inp.setAttribute("maxlength","6");
    btn.innerText = "Submit";
    inp.style.border = "1px solid black"

    btn.addEventListener("click",()=>{

        if(inp.value == 123456){

            localStorage.setItem("subscriber","true");
            inp.style.border = "2px solid lightgreen"
            if(window.confirm("Congratulations !! You are a subscriber now. Go to Dashboard?")){
                // action you want to perform
                window.open(`./userDashboard.html`,"_self")
            }
            
        } else {
            inp.style.border = "2px solid red"
            alert("Wrong OTP");
        }

    });

    cont.append(h3,inp,btn);
});