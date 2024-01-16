console.log("Good afternoon!");

function showMsg() {
  setTimeout(function () {
    alert("You pressed the button! You Shouldn't have pressed the button");
  }, 1);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", showMsg);
