//variables
var seven = document.getElementById("seven")
var display = document.getElementById("screen")
//event listeners
seven.addEventListener("click", function(){
  addToDisplay(seven.innerHTML);
})
//functions
function addToDisplay(text){
  console.log("hi")
  display.innerHTML = text
}