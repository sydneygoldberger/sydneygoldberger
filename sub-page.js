

let subPageCircle = document.getElementById("subPageCircle");
let counter = 0;

document.onmousemove = function(e){
  subPageCircle.style.top = e.clientY + "px";
  subPageCircle.style.left = e.clientX + "px";

  counter++; 
  console.log(e.clientX, e.clientY);
  subPageCircle.style.backgroundColor = "hsl(" + Math.random()*360 + ", 100%, 50%)";
}
