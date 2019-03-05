//variables
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

var display = document.getElementById("screen")
//event listeners
seven.addEventListener("click", function(){
  addToDisplay(seven.innerHTML);
})
eight.addEventListener("click", function(){
  addToDisplay(eight.innerHTML);
})
nine.addEventListener("click", function(){
  addToDisplay(nine.innerHTML);
})
four.addEventListener("click", function(){
  addToDisplay(four.innerHTML);
})
five.addEventListener("click", function(){
  addToDisplay(five.innerHTML);
})
six.addEventListener("click", function(){
  addToDisplay(six.innerHTML);
})
one.addEventListener("click", function(){
  addToDisplay(one.innerHTML);
})
two.addEventListener("click", function(){
  addToDisplay(two.innerHTML);
})
three.addEventListener("click", function(){
  addToDisplay(three.innerHTML);
})
zero.addEventListener("click", function(){
  addToDisplay(zero.innerHTML);
})
divide.addEventListener("click", function(){
  addToDisplay("&divide");
})
times.addEventListener("click", function(){
  addToDisplay("&times");
})
minus.addEventListener("click", function(){
  addToDisplay("-");
})
plus.addEventListener("click", function(){
  addToDisplay("+");
})
//functions
function addToDisplay(text){
  display.innerHTML += text
}