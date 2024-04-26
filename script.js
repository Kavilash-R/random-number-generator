let num = document.getElementById("ranNum");

function randomNum() {
  let rollNum = Math.floor(Math.random() * 1001);
  num.textContent = rollNum;
}
