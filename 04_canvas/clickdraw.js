//Yifan Wang (Team DropTheBall)
//SoftDev2 pd1
//K#04 - I See a Red Door...
//2020-02-05

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var mode = 0; //0 for rectangle, 1 for dot

var clearCanvas = function(e) {
  console.log(e);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var changeRect = function(e) {
  console.log(e);
  var displayedState = document.getElementById("mode");
  displayedState.innerHTML = "Rectangle";
  mode = 0;
};

var changeDot = function(e) {
  console.log(e);
  var displayedState = document.getElementById("mode");
  displayedState.innerHTML = "Dot";
  mode = 1;
};

var draw = function(e) {
  console.log(e);
  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  if (mode == 0){
    ctx.fillStyle = "red";
    ctx.fillRect (x, y, 30, 50);
  }
  if (mode == 1) {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, true);
    ctx.fill();
  }
}

var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearCanvas);

var rect = document.getElementById("rectangle");
rect.addEventListener('click', changeRect);

var dot = document.getElementById("dot");
dot.addEventListener('click', changeDot);

canvas.addEventListener('click', draw);
