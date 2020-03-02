const submit = document.querySelector("#sub");
const clear = document.querySelector("#clr");
const bob = document.querySelector("#bob");
const owed = document.querySelector("#owed");
const tax = document.querySelector("#tax");
const pocket = document.querySelector("#pocket");
const prblm = document.querySelector("#prblm");

submit.addEventListener("click", function() {
  const sum = bob.value;
  let x;
  let y;
  if (sum < 48535) {
    x = (sum * 0.15).toFixed(2);
    owed.textContent = "$" + x;
    tax.textContent = ((x / sum) * 100).toFixed(2);
    y = (sum - x).toFixed(2);
    pocket.textContent = "$" + y;
  } 
  else if (sum >= 48535 && sum < 97069) {
    x = ((sum - 48535) * 0.205 + 7280).toFixed(2);
    owed.textContent = "$" + x;
    tax.textContent = ((x / sum) * 100).toFixed(2);
    y = (sum - x).toFixed(2);
    pocket.textContent = "$" + y;
  } 
  else if (sum >= 97069 && sum < 150473) {
    x = ((sum - 97069) * 0.26 + 17230).toFixed(2);
    owed.textContent = "$" + x;
    tax.textContent = ((x / sum) * 100).toFixed(2);
    y = (sum - x).toFixed(2);
    pocket.textContent = "$" + y;
  } 
  else if (sum >= 150473 && sum < 214368) {
    x = ((sum - 150473) * 0.29 + 31115).toFixed(2);
    owed.textContent = "$" + x;
    tax.textContent = ((x / sum) * 100).toFixed(2);
    y = (sum - x).toFixed(2);
    pocket.textContent = "$" + y;
  } 
  else if (sum >= "a" || sum >= "A") {
    prblm.textContent = "Error : Enter a number";
  } 
  else {
    x = ((sum - 214368) * 0.33 + 49645).toFixed(2);
    owed.textContent = "$" + x;
    tax.textContent = ((x / sum) * 100).toFixed(2);
    y = (sum - x).toFixed(2);
    pocket.textContent = "$" + y;
  }

}
);

clear.addEventListener("click", function() {
  bob.value = null;
  owed.textContent = null;
  tax.textContent = null;
  pocket.textContent = null;
  prblm.textContent = null;

}
);

