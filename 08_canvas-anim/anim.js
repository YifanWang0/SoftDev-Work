// Yifan Wang and Emily Zheng (Team Vision Donors)
// SoftDev pd1
// K08 -- What is it saving the screen from?
// 2020-02-13

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var radius = 0;
var value = 0;
var id = 0;

document.getElementById("start").addEventListener("click", function () {
  console.log();
  if (id == 0) {
    id = window.requestAnimationFrame(circle);
  }
});


document.getElementById("stop").addEventListener("click", function () {
    console.log();
    window.cancelAnimationFrame(id);
    id = 0;
});

function circle() {
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.arc(300, 300, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'rgb(135,206,250)';
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  if (radius >= 300){
    value = -1;
  }
  radius = radius + value;
  if (radius <= 0){
    value = 1;
  }
  id = window.requestAnimationFrame(circle);
}
