// Border Color Changing Part
document.querySelectorAll("#work > div:nth-child(1)")[0].addEventListener("click", ()=>{

    for(let i = 1; i <= document.querySelectorAll("#work > div").length; i++){
        document.querySelectorAll("#work > div:nth-child("+i+")")[0].style.border = "1px solid #d3e1ea";
    }

    document.querySelectorAll("#work > div:nth-child(1)")[0].style.border = "2px solid #457eff";
    document.querySelectorAll("#work > div:nth-child(1)")[0].style.backgroundColor = "#fff";
});

document.querySelectorAll("#work > div:nth-child(2)")[0].addEventListener("click", ()=>{

    for(let i = 1; i <= document.querySelectorAll("#work > div").length; i++){
        document.querySelectorAll("#work > div:nth-child("+i+")")[0].style.border = "1px solid #d3e1ea";
    }

    document.querySelectorAll("#work > div:nth-child(2)")[0].style.border = "2px solid #457eff";
    document.querySelectorAll("#work > div:nth-child(1)")[0].style.backgroundColor = "#fff";
});

let form = document.getElementById("mainForm");

let credentials =  JSON.parse(localStorage.getItem("cred"))||[{email:"rkc3660@gmail.com",pass:"123",name:"Rishab Kr Chaurasiya",mobile:"8789789560"},];

// Submission part
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    let data = {};

    data.name = form.name.value;
    data.email = form.email.value;
    data.pass = form.pass.value;
    data.mobile = form.mobile.value;

    credentials.push(data);
    localStorage.setItem("cred",JSON.stringify(credentials));

    setTimeout(()=>{
        alert("Registration Successful. Click 'OK' to Login");
    },10);
});