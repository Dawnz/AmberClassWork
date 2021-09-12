var canvas = document.getElementById("myCanvas2");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";

var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

ctx.strokeStyle=gradient;
ctx.strokeText("Hello World",10,50);

var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

var canvas = document.getElementById("myCanvas4");
var ctx = canvas.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();