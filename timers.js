console.log("Good afternoon!");

//get references to DOM elements
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const popUp = document.getElementById("popUp");
//attach event listeners
btn.addEventListener("click", function () {
  showAlertMsg("You pressed the wrong button");
}); //this one is the alert
btn.addEventListener("mouseover", showPopup);
btn.addEventListener("mouseleave", cancelPopUp);
btn2.addEventListener("click", function () {
  showAlertMsg("You pressed the correct button");
}); //this one is the alert
btn2.addEventListener("mouseover", showPopUp2);

function showAlertMsg(msg) {
  alert(msg);
}

// This first button uses a class and css.
function showPopup() {
  popUp.classList.add("visible");
}
function cancelPopUp() {
  setTimeout(function () {
    popUp.classList.remove("visible");
  }, 5000);
}

//This second button is writing to the DOM. JS only.
function showPopUp2() {
  popUp2.innerText = "DO IT!";
  setTimeout(function () {
    popUp2.innerText = "";
  }, 5000);
}
