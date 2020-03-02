console.log("running!!");


const type = document.getElementById("max");
const start = document.querySelector("#start");
const clear = document.querySelector("#clear");


const display = document.querySelector(".display");


function randomNumber(num) {
  num = type.value;
  return Math.ceil(Math.random() * num) + 1;
 
}


function startFn() {
  display.textContent = randomNumber();
  
}


function clearFn() {
  display.textContent= "Random number will go here";
  type.value = null;
  
}

start.addEventListener("click", startFn);

clear.addEventListener("click", clearFn);