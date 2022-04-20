var elButton = document.querySelector(".button");
var elRefresh = document.querySelector(".refreshBtn");
var elLabel = document.querySelector(".label");
var elInput = document.querySelector(".input");
var elOutput = document.querySelector(".output");

elButton.style.fontSize = "52px";
elButton.style.marginLeft = "100px";
elLabel.style.fontSize = "52px";
elInput.style.marginTop = "30px";
elLabel.style.marginLeft = "100px";
elLabel.style.color = "white";
elInput.style.fontSize = "52px";
elInput.style.marginLeft = "50px";
elInput.style.width = "150px";
elOutput.style.display = "block";
elOutput.style.fontSize = "52px";
elOutput.style.color = "white";
elOutput.style.marginTop= "100px";
elOutput.style.marginLeft = "100px";
elRefresh.style.fontSize = "52px";
elRefresh.style.marginLeft = "300px";



elButton.addEventListener("click", function(e){
  e.preventDefault();

  var amount = elInput.value.trim();
  var MINIMUM_AGE = 16;
  var allowed = "Kirishingiz mumkin!!!";
  var notAllowed = "Kirish mumkin emas ! Hali yoshsiz !!!";
  

  if (amount = ""){
    return
  }

  amount = Number(amount);
  if (isNaN(amount)){
    return
  }

  if (amount >= MINIMUM_AGE) {
    elOutput.textContent = allowed;
  } else {
    elOutput.textContent = notAllowed;
  } 
  
})