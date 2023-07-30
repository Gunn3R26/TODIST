// login js
import {auth, signInWithEmailAndPassword } from "/js/app.js"
document.getElementById("login-button").addEventListener("click", login );
function login(e) {
    e.preventDefault(); //Prevent the default form submission behavior

    var email=document.getElementById("email-log").value;
    var password=document.getElementById("pass-log").value;

    signInWithEmailAndPassword(auth,email,password).then((userCrendential)=>{
        //signed in
        // const user = userCrendential.user;
        window.location="todo.html";
        alert("login done");
    })
    .catch((error)=> {
        alert(error.msg+"Password Password Uncle Sahi Password Dedo") //show error message
    })
}
// document.getElementById("forgot-btn").addEventListener("click",xd);
// function xd(){
//     alert("get better at remembering your passwords")
// }

//signup js
import {createUserWithEmailAndPassword} from "/js/app.js";


document.getElementById("signup-button").addEventListener('click',register)
function register(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var email = document.getElementById("email-sign").value;
  var password = document.getElementById("pass-sign").value;
  var cnfrm_password = document.getElementById("cpass-sign").value;

  if (password !== cnfrm_password) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("HO gaya bhai tu register");
      window.location.href = "login.html";
      console.log(user.uid);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage); // Show the error message in an alert
      console.log(errorCode); // Log the error code to the console
      console.log(errorMessage); // Log the error message to the console
    });
}
var typed = new Typed(".type", {
  strings: ["join on the fun.", "make your own space.", "open your own todist."],
  smartBackspace: true,
  startDelay: 500,
  typeSpeed: 130,
  backDelay: 500,
  backSpeed: 30,
  loop: true,
});
var typed1 = new Typed(".type1", {
  strings: ["join on the fun.", "make your own space.", "open your own todist."],
  smartBackspace: true,
  startDelay: 500,
  typeSpeed: 130,
  backDelay: 500,
  backSpeed: 30,
  loop: true,
});