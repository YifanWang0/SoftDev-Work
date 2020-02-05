var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 80, 80);
ctx.clearRect(10,10,40,40);

ctx.font = "100px Verdana";
ctx.fillStyle = "green";
ctx.fillText("Hello World", 25, 100, 10);

var button = document.getElementById("clear");
button.addEventListner("click", clearCanvas(canvas, 600, 350));

var clearCanvas = function(name, canvasW, canvasH) {
  name.clearRect(0,0,canvasW, canvasH);
}
