//variables
let leftHand = [];
let rightHand = [];
let operator;
let operatorPushed = false;
var seven = document.getElementById("seven")
var eight = document.getElementById("eight")
var nine = document.getElementById("nine")
var four = document.getElementById("four")
var five = document.getElementById("five")
var six = document.getElementById("six")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var zero = document.getElementById("zero")
var divide = document.getElementById("divide")
var times = document.getElementById("times")
var minus = document.getElementById("minus")
var plus = document.getElementById("plus")
var equals = document.getElementById("equals")
var decimal = document.getElementById("dot")

var display = document.getElementById("screen")
//event listeners
seven.addEventListener("click", function(){
  checkIfOperatorPushed(7);
  addToDisplay(seven.innerHTML);
})
eight.addEventListener("click", function(){
  checkIfOperatorPushed(8);
  addToDisplay(eight.innerHTML);
})
nine.addEventListener("click", function(){
  checkIfOperatorPushed(9);
  addToDisplay(nine.innerHTML);
})
four.addEventListener("click", function(){
  checkIfOperatorPushed(4);
  addToDisplay(four.innerHTML);
})
five.addEventListener("click", function(){
  checkIfOperatorPushed(5);
  addToDisplay(five.innerHTML);
})
six.addEventListener("click", function(){
  checkIfOperatorPushed(6);
  addToDisplay(six.innerHTML);
})
one.addEventListener("click", function(){
  checkIfOperatorPushed(1);
  addToDisplay(one.innerHTML);
})
two.addEventListener("click", function(){
  checkIfOperatorPushed(2);
  addToDisplay(two.innerHTML);
})
three.addEventListener("click", function(){
  checkIfOperatorPushed(3);
  addToDisplay(three.innerHTML);
})
zero.addEventListener("click", function(){
  checkIfOperatorPushed(0);
  addToDisplay(zero.innerHTML);
})
divide.addEventListener("click", function(){
  operator = "/"
  operatorPushed = true;
  addToDisplay("&divide");
})
times.addEventListener("click", function(){
  operator = "*"
  operatorPushed = true;
  addToDisplay("&times");
})
minus.addEventListener("click", function(){
  operator = "-"
  operatorPushed = true;
  addToDisplay("-");
})
plus.addEventListener("click", function(){
  operator = "+"
  operatorPushed = true;
  addToDisplay("+");
})
decimal.addEventListener("click", function(){
  checkIfOperatorPushed(".");
  addToDisplay(".");
})
equals.addEventListener("click", function(){
  displayAnswer()
})

//functions
function addToDisplay(text){
  display.innerHTML += text
}

function checkIfOperatorPushed(num){
  if (!operatorPushed){
    leftHand.push(num);
  } else {
    rightHand.push(num);
  }
}

function displayAnswer(){
  var answer;
  switch (operator){
    case "/":
      answer = Number(leftHand.join("")) / Number(rightHand.join(""));
      break;
    case "*":
      answer = Number(leftHand.join("")) * Number(rightHand.join(""));
      break;
    case "-":
      answer = Number(leftHand.join("")) - Number(rightHand.join(""));
      break;
    case "+":
      answer = Number(leftHand.join("")) + Number(rightHand.join(""));
      break;
    case undefined:
      answer = Number(leftHand.join(""));
      setTimeout(function(){
        reset() 
      }, 1000)
      break;
    default:
      answer = "Invalid Expression";
  }
  if (answer != Infinity){
    leftHand.length = 0;
    leftHand.push(answer);
    rightHand.length = 0;
    display.innerHTML = answer
  } else {
    alert("Don't divide by zero!")
    rightHand.pop();
    display.innerHTML = leftHand.join("") + parseOperator(operator) + rightHand.join("")
  }
}

function parseOperator(op) {
  if (op = "/"){
    return "&divide"
  } else if (op = "*"){
    return "&times"
  } else {
    return op
  }
}

function reset(){
  leftHand.length = 0
  rightHand.length = 0
  answer = 0
  display.innerHTML = ""
}