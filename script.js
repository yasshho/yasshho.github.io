// ===============================
// AOS
// ===============================

AOS.init({

duration:1000,

once:true,

offset:100

});

// ===============================
// ACTIVE SIDEBAR
// ===============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".sidebar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('.sidebar a').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// ===============================
// PROFILE GLOW
// ===============================

const profile=document.querySelector(".profile-card");

if(profile){

profile.addEventListener("mousemove",()=>{

profile.style.boxShadow="0 0 60px rgba(255,0,0,.5)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.boxShadow="none";

});

}

// ===============================
// EMAIL JS
// ===============================

emailjs.init({

publicKey:"a1FRqB6OHkVsr9gSz"

});

const form=document.getElementById("contact-form");

form.addEventListener("submit",function(e){

e.preventDefault();

emailjs.send(

"service_02q98vc",

"template_onx130l",

{

name:document.getElementById("name").value,

email:document.getElementById("email").value,

message:document.getElementById("message").value

}

)

.then(function(){

alert("✅ Message Sent Successfully!");

form.reset();

})

.catch(function(error){

console.error(error);

alert("❌ Failed to send message.");

});

});

// ===============================
// PROJECT CARD EFFECT
// ===============================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ===============================
// BUTTON EFFECT
// ===============================

document.querySelectorAll("button,.primary,.secondary,.project-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transition=".3s";

});

});

// ===============================
// CONSOLE MESSAGE
// ===============================

console.log("%cWelcome to Yash Shinde Portfolio",

"color:red;font-size:22px;font-weight:bold;");

console.log("%cPortfolio Loaded Successfully",

"color:white;font-size:16px;");