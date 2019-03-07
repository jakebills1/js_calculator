//variables
let leftHand = [];
let rightHand = [];
let operator;
let operatorPushed = false;
let exponent = false;
var display = document.getElementById("screen")

 
$(".num-btn").on("click", function(){
  checkIfOperatorPushed(this.firstChild.innerHTML)
  addToDisplay(this.firstChild.innerHTML)
  // debugger
})

$(".fun-btn").on("click", function(){
  // debugger
  operator = this.id
  operatorPushed = true;
  addToDisplay(parseOperator(operator))
})

$("#equals").click(function(){
  displayAnswer()
})




// resetBtn.addEventListener("click", function(){
//   reset();
// })
// power.addEventListener("click", function(){
//   exponent = true;
//   operatorPushed = true;
//   addToDisplay("^")
// })

//functions
function addToDisplay(text){
  if (leftHand.length == 0 && operatorPushed == true){
    alert("Must press number before operater")
    reset();
  } else {
  display.innerHTML += text
  }
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
  if (exponent) {
    answer = Math.pow(Number(leftHand.join("")), Number(rightHand.join("")));
    debugger
    leftHand.length = 0;
    leftHand.push(answer);
    rightHand.length = 0;
    exponent = false;
    display.innerHTML = answer
  } else {
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
}

function parseOperator(op) {
  if (op == "/"){
    return "&divide"
  } else if (op == "*"){
    return "&times"
  } else {
    return op
  }
}

function reset(){
  leftHand.length = 0
  rightHand.length = 0
  answer = 0
  operatorPushed = false
  display.innerHTML = ""
}