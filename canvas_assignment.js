var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

ctx.strokeStyle=gradient;
ctx.strokeText("Hello World",10,50);

var canvas3 = document.getElementById("myCanvas3");
var ctx = canvas3.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(150,200);
ctx.stroke();

var canvas4 = document.getElementById("myCanvas4");
var ctx = canvas4.getContext("2d");
ctx.moveTo(100,100);
ctx.lineTo(10,200);
ctx.stroke();

