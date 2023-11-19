function add() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var output = num1 + num2;
  document.getElementById("output").textContent = " = " + output;
}


function subtract() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var output = num1 - num2;
  document.getElementById("output").textContent = " = " + output;
}


function multiply() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var output = num1 * num2;
  document.getElementById("output").textContent = " = " + output;
}


function divide() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  if (num2 !== 0  ) {
  var output = num1 / num2;
  document.getElementById("output").textContent = " = " + output;
} else{
    document.getElementById("output").textContent = "ERROR";
  }
}
