// radar system backend

var canvas = document.querySelector("canvas");

canvas.width = 300;
canvas.height = 300;

var c = canvas.getContext("2d");

// sets the horizontal and virtical lines of the radar
c.beginPath();
c.moveTo(150, 0);
c.lineTo(150, 300);
c.stroke();

c.beginPath();
c.moveTo(0, 150);
c.lineTo(300, 150);
c.stroke();
