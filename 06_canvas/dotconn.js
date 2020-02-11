//Yifan Wang and Tiffany Cao (Team Trashy Artists)
//SoftDev2 pd1
//K#05 - Dot Dot Dot
//2020-02-11

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
path = []; //stores the last dot drawn on the canvas

var clearCanvas = function(e) {
  console.log(e);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var draw = function(e) {
  console.log(e);
  var x = e.offsetX;
  var y = e.offsetY;
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI, true);
  ctx.fill(); //draws circle

  if (path.length == 0){ //first dot drawn
    path.push([x, y])
  }
  ctx.moveTo(path[0][0], path[0][1]); //goes to the position of the last drawn dot
  ctx.lineTo(x, y); //draws a line from previous dot to current dot
  ctx.stroke();
  path = []; //clears path array
  path.push([x, y]); //stores current dot in array
};

var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearCanvas);


canvas.addEventListener('click', draw);
