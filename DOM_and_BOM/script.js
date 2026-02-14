alert("Connected");
//example 1
//let hold = document.getElementById("changeTextButton");
//console.log(hold);
document.getElementById("changeTextButton").addEventListener("click", function(){
  console.log(this)
});