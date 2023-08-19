let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

const drawLine = () => {
  context.moveTo(0, 0);
  context.lineTo(200, 100);
  context.stroke();
};

const drawCircle = () => {
  context.beginPath();
  context.arc(95, 50, 40, 0, 2 * Math.PI);
  context.stroke();
};

const drawText = () => {
  context.font = "30px Arial";
  context.fillText("Hello World", 10, 50);
};

const clearCanvas = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

document.body.onkeyup = function (e) {
  if (e.key == " ") {
    clearCanvas();
  }

  if (e.key == "l") {
    drawLine();
  }

  if (e.key == "c") {
    drawCircle();
  }

  if (e.key == "t") {
    drawText();
  }
};
