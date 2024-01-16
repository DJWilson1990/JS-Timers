console.log("Good afternoon!");

function showMsg() {
  setTimeout(function () {
    alert("You pressed the button! You Shouldn't have pressed the button");
  }, 1);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", showMsg);

function showPopup() {
  setTimeout(function () {
    //need to link my p tag here somehow.
  });
}

const popUp = document.getElementById("popUp");
btn.addEventListener("mouseover", showPopup);
