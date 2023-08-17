let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

const drawLine = () => {
  ctx.moveTo(0, 0);
  ctx.lineTo(200, 100);
  ctx.stroke();
};

const drawOtherLine = () => {
  ctx.moveTo(0, 100);
  ctx.lineTo(200, 0);
  ctx.stroke();
};

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    drawLine();
  }

  if (e.key == "f" || e.code == "f" || e.keyCode == 70) {
    drawOtherLine();
  }
};
