// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "black";
let x;
let y;

// Create function to draw circle
function drawCircle(x, y) {
  ctx.beginPath();
  //   arc(x, y, radius, startAngle, endAngle, counterclockwise)
  //   Draws an arc which is centered at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction indicated by counterclockwise (defaulting to clockwise).
  ctx.arc(x, y, size, 0, Math.PI * 2);
  //   Note: Angles in the arc function are measured in radians, not degrees. To convert degrees to radians you can use the following JavaScript expression: radians = (Math.PI/180)*degrees. We want circle of 360 degrees
  ctx.fillStyle = color;
  ctx.fill();
}

// Create function to draw line
/*
x1 and y1 are the coordinates of the starting point of the line.
x2 and y2 are the coordinates of the ending point of the line.
color is the color of the line, which should be a valid CSS color value (e.g., "red", "#00ff00", "rgba(255, 0, 0, 0.5)").
size is the thickness of the line in pixels.
*/
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}
