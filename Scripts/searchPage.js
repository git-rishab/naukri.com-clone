let results = [
    {
        name:"Virtual Drive 6th Apl | Frontend web Developer | Hyderabad",
        p1:"Cybage",
        p2:"Good to have: Google App Engine, Git",
        rating:"4.0 ",
        experience:"2-6 Yrs",
        salary:"50,000 - 3,00,000 PA.",
        location:"Temp. WFH - Hyderabad/Secunderabad",
        skills:["Responsive UI","Python","RWD","HTML","Angular","Google App Engine","Git"],
        date:"FEW HOURS AGO",
        dateCode:"1",
    },
    {
        name:"Web Developer & Designer",
        p1:"Seepositive",
        p2:"Should be able to work on mobile application (Both- Android ios)",
        rating:"4.0 ",
        experience:"2-6 Yrs",
        salary:"Not disclosed",
        location:"Raipur",
        skills:["Backend","Web technologies","PHP","HTML","IOS","Search engine optimization"],
        date:"FEW HOURS AGO",
        dateCode:"1",
    },
    {
        name:"Immediate Hiring For React JS Web Developer - MNC",
        p1:"Barrla Systems Pvt Ltd",
        p2:"Experience with popular React.js workflows (such as Flux or Redux) is a plus Hands-on e...",
        rating:"4.8 ",
        experience:"1-5 Yrs",
        salary:"Not disclosed",
        location:"Chennai(Mylapore)",
        skills:["Backend","React.Js","HTML","CSS","javascript"],
        date:"1 DAY AGO",
        dateCode:"2",
    },
    {
        name:"Web Developer",
        p1:"Transperfect",
        p2:"job-description fs12 grey-text",
        rating:"4.8 ",
        experience:"0-2 Yrs",
        salary:"50,000 - 2,75,000 PA.",
        location:"Pune",
        skills:["Drupal","Coding","XML","PHP","HTML","SEM"],
        date:"1 DAY AGO",
        dateCode:"2",
    },
    {
        name:"PHP/LAMP Web Developer - CodeIgniter/Wordpress",
        p1:"Hyrezy Talent Solutions",
        p2:"Experience working within a team setting The candidate should have some team leadership...",
        rating:"4.8 ",
        experience:"4-9 Yrs",
        salary:"50,000 - 8,75,000 PA.",
        location:"Noida",
        skills:["MySQL","Apache Server","LAMP","PHP","Server Administration","CodeIgniter"],
        date:"2 DAY AGO",
        dateCode:"3",
    },
    {
        name:"Frontend Web Developer - UI Platform",
        p1:"Hyrezy Talent Solutions",
        p2:"- We are looking for a Front-End Web Developer who is motivated to combine the art of d...",
        rating:"4.8 ",
        experience:"3-6Yrs",
        salary:"50,000 - 4,75,000 PA.",
        location:"Noida",
        skills:["jQuery","AJAX","OOPS","CSS","API Integration"],
        date:"2 DAY AGO",
        dateCode:"3",
    },
    {
        name:"Web Developer",
        p1:"Elektrobit",
        p2:"Experience with embedded systems and IVI related SW components is a must Rookie experie...",
        rating:"4.2 ",
        experience:"4-8Yrs",
        salary:"50,000 - 4,75,000 PA.",
        location:"Bangalore/Bengaluru",
        skills:["Android","LINUX","QNX","React Framework","UML"],
        date:"1 DAY AGO",
        dateCode:"2",
    },
    {
        name:"Web Developer/Full Stack Developer",
        p1:"Proprofs",
        p2:"Good problem solving experience using JavaScript or ES6 with earlier versionsThis is th...",
        rating:"3.5 ",
        experience:"4-6Yrs",
        salary:"50,000 - 7,75,000 PA.",
        location:"Temp. WFH - Delhi / NCR",
        skills:["Symfony Framework","web technologies","php","Laravel","Codeigniter","Symfony"],
        date:"FEW HOURS AGO",
        dateCode:"1",
    },

];


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

let result = document.getElementById("results");

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
