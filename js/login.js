import {auth, signInWithEmailAndPassword } from "/js/app.js"
document.getElementById("login-button").addEventListener("click", login );
function login(e) {
    e.preventDefault(); //Prevent the default form submission behavior

    var email=document.getElementById("login-email").value;
    var password=document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth,email,password).then((userCrendential)=>{
        //signed in
        // const user = userCrendential.user;
        window.location="index.html";
        alert("login done");
    })
    .catch((error)=> {
        alert(error.msg+"Password Password Uncle Sahi Password Dedo") //show error message
    })
}
document.getElementById("forgot-btn").addEventListener("click",xd);
function xd(){
    alert("get better at remembering your passwords")
}
var typed = new Typed(".type", {
    strings: ["Login", "लॉग इन करें", "প্রবেশ করুন"],
    smartBackspace: true,
    startDelay: 500,
    typeSpeed: 130,
    backDelay: 1000,
    backSpeed: 30,
    loop: true,
  });