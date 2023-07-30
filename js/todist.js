// script.js
import { auth, doc, getDoc, setDoc, db } from "js/app.js";
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-btn");
const logoutBtn = document.getElementById("logout-btn");

const loginBtn = document.getElementById("login-btn");
console.log("Before adding event listener");
loginBtn.addEventListener("click", () => {
  console.log("login");
  window.location.href = "login.html";
});
console.log("after adding event listener");

auth.onAuthStateChanged((user) => {
  if (user) {
    logoutBtn.style.display = "block";
    showData();
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }
});

function redirectToLogin() {
  window.location.href = "login.html";
}

function addTask() {
  if (inputBox.value === "") {
    alert("Jaldi socho | kuch toh likhna padega");
    return; // Stop adding tasks if the input is empty
  }

  if (!auth.currentUser) {
    redirectToLogin();
    return; // Stop adding tasks after redirect
  }

  // Add the task to the list only when the user is logged in
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

addBtn.addEventListener("click", addTask);

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }

//Firebase savedata
function saveData() {
  const taskArray = Array.from(listContainer.children).map(
    (li) => li.innerText
  );
  const currentUser = auth.currentUser;
  if (currentUser) {
    // Create a Firestore document reference for the user's tasks
    const userTasksRef = doc(db, "Todist", currentUser.uid);

    // Set the tasks data in the Firestore document
    setDoc(userTasksRef, { tasks: taskArray })
      .then(() => console.log("Data saved to Firestore!"))
      .catch((error) =>
        console.error("Error saving data to Firestore:", error)
      );
  } else {
    console.log("User not logged in. Data will not be saved.");
  }
}

//Show data from Firebase

// Function to show tasks from Firebase Firestore
function showData() {
  const currentUser = auth.currentUser;
  if (currentUser) {
    const userTasksRef = doc(db, "Todist", currentUser.uid);
    getDoc(userTasksRef)
      .then((doc) => {
        if (doc.exists()) {
          // Clear the listContainer before adding the tasks
          listContainer.innerHTML = "";

          const data = doc.data();
          const taskArray = data.tasks || [];
          taskArray.forEach((task) => {
            let li = document.createElement("li");
            li.innerHTML = task;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
}
var ranchange = document.getElementById("rabg");
rbg = ["bg-1.jpg", "bg-2.jpg", "bg-3.jpg", "bg-4.jpg", "bg-5.jpg"];
let no = Math.floor(Math.random() * rbg.length);

window.onload = function () {
  ranchange.style.backgroundImage = "url(" + rbg[no] + ")";
};
