// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let size = 20;
let color = "black";
let isPressed = false;
let x;
let y;

const increBtn = document.getElementById("increase");
const decreBtn = document.getElementById("decrease");
const clear = document.getElementById("clear");
const colorEl = document.getElementById("color");
const number = document.getElementById("number");

increBtn.addEventListener("click", increaseSize);

decreBtn.addEventListener("click", decreaseSize);

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

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
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

function increaseSize() {
  size += 5;
  if (size >= 50) {
    size = 50;
  }
  number.innerHTML = size;
}

function decreaseSize() {
  size -= 5;
  if (size <= 5) {
    size = 5;
  }
  number.innerHTML = size;
}
