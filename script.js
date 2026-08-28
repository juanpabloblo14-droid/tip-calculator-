//ELEMENTS 
const billInput = document.getElementById("bill");
const percentage = document.getElementById("tipPercent");
const calBtn = document.getElementById("calculateBtn");
const tipAm = document.getElementById("tipAmount");
const total = document.getElementById("totalAmount");

//LISTENER ON THE BUTTON 
calBtn.addEventListener("click", function(){
let billAmount = Number(billInput.value);
let tipPercent = Number(percentage.value);
let tip = billAmount*(tipPercent / 100);
let totalBill = billAmount+tip;

//DISPLAY RESULT 
tipAm.textContent =`$${tip}`;
total.textContent = `$${totalBill}`;

});

