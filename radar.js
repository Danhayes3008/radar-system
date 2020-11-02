// radar system backend

var canvas = document.querySelector("canvas");

canvas.width = 300;
canvas.height = 300;

var c = canvas.getContext("2d");

// radar scan line
var scanStartX = 150;
var scanStartY = 150;
var scanEndX = 0;
var scanEndY = 150;

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 98, 0, 0.05)'
    c.fillRect(0, 0, canvas.width, canvas.height);

    c.beginPath();
    c.fillStyle = 'rgba(0, 0, 0, 0.1)'
    c.moveTo(scanStartY, scanStartX);
    c.lineTo(scanEndY, scanEndX);

    c.stroke();
    console.log(scanEndX);
    if (scanEndX == 0 && scanEndY < 300) {
        scanEndY += 1;
    } else if (scanEndY == 300 && scanEndX < 300){
        scanEndX += 1;
    }
    else if (scanEndY > 0 && scanEndX == 300){
        scanEndY -= 1;
    }
    else if (scanEndX > 0 && scanEndY == 0){
        scanEndX -= 1;
    }



    // sets the horizontal and virtical lines of the radar
c.beginPath();
c.moveTo(150, 0);
c.lineTo(150, 300);
c.stroke();

c.beginPath();
c.moveTo(0, 150);
c.lineTo(300, 150);
c.stroke();

// sets the distance radius markers on the radar
c.beginPath();
// 30km distance
c.arc(150, 150, 30, 0, 2 * Math.PI);
c.stroke();
c.beginPath();
// 50km distance
c.arc(150, 150, 50, 0, 2 * Math.PI);
c.stroke();
c.beginPath();
// 70km distance
c.arc(150, 150, 70, 0, 2 * Math.PI);
c.stroke();
c.beginPath();
// 90km distance
c.arc(150, 150, 90, 0, 2 * Math.PI);
c.stroke();
c.beginPath();
// 110km distance
c.arc(150, 150, 110, 0, 2 * Math.PI);
c.stroke();
c.beginPath();
// 130km distance
c.arc(150, 150, 130, 0, 2 * Math.PI);
c.stroke();

// base lacation mrker
c.beginPath();
c.arc(150, 150, 5, 0, 2 * Math.PI);
c.fillStyle = "blue";
c.fill();
c.stroke();

// enemy location markers
c.beginPath();
c.arc(100, 255, 5, 0, 2 * Math.PI);
c.fillStyle = "red";
c.fill();
c.stroke();

c.beginPath();
c.arc(80, 235, 5, 0, 2 * Math.PI);
c.fillStyle = "red";
c.fill();
c.stroke();

c.beginPath();
c.arc(100, 235, 5, 0, 2 * Math.PI);
c.fillStyle = "red";
c.fill();
c.stroke();
}
animate();
