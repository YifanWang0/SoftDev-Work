//Yifan Wang and Tiffany Cao (Team Trashy Artists)
//SoftDev2 pd1
//K#05 - ... and I want to Paint It Better
//2020-02-05

var canvas = document.getElementById("slate");
var ctx = canvas.getContext("2d");
var mode = 0; //0 for rectangle, 1 for dot

var clearCanvas = function(e) {
  console.log(e);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

var toggle = function(e) {
  console.log(e);
  var displayedState = document.getElementById("mode");
  if (mode == 0) {
    mode = 1;
    displayedState.innerHTML = "Dot";
  } else {
    mode = 0;
    displayedState.innerHTML = "Box";
  }
};

var draw = function(e) {
  console.log(e);
  // e.offsetX and e.offsetY return the coordinates of the mouse-pointer relative to the canvas;
  // this way it will still place the box at the mouse location when the page is zoomed in since
  // offsetX and offsetY are relative to the canvas
  var x = e.offsetX;
  var y = e.offsetY;
  if (mode == 0){
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 30, 30);
  }
  if (mode == 1) {
    ctx.fillStyle = "blue";
    // ctx.beginPath() creates a new path for each circle/dot drawn so that the dots are not
    // automatically connected
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, 2 * Math.PI, true);
    ctx.fill();
  }
};

// e.preventDefault() will prevent what should happen from taking place. For example, if lines
// 52 to 55 were added, then when the "Clear Canvas" button is created, the canvas will not clear
var clearButton = document.getElementById("clear");
clearButton.addEventListener('click', clearCanvas);
// clearButton.addEventListener('click', function(e) {
//   console.log(e);
//   e.preventDefault();
// });

var changeMode = document.getElementById("toggle");
changeMode.addEventListener('click', toggle);

canvas.addEventListener('click', draw);
