let data = JSON.parse(localStorage.getItem("cred")) || [];
let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let userData = {};
    userData.email = form.email.value;
    userData.pass = form.pass.value;
    


    // Authentication
    let check = false;
    data.forEach(el => {
        
        if(el.email == userData.email && el.pass == userData.pass){
            localStorage.setItem("userDetails", JSON.stringify(el));
            check = true;
            return;
        }
    });

    // Alert And login to another page
    if(check == true){
        
        ifTrue();
        
    } else{
        alert("Wrong Credentials");

        document.querySelectorAll("form > input")[0].style.border = "1px solid red";
        document.querySelectorAll("form > input")[1].style.border = "1px solid red";
    }


});

function ifTrue(){
    if(window.confirm("Login Successful, Go to Dashboard?")){
        // action you want to perform
        window.open(`./userDashboard.html`,"_self")
     }
}

function submitHere() {
    document.getElementById("submit").setAttribute("onclick","location.href=`./userDashboard.html`");
}
