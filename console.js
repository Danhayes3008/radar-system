let speed;
let engineOutput = 100;
let engineOverHeat = 70;
let maxTemp = 100;

// Engine over heat system
window.setInterval(
    function () {
        if (engineOverHeat < 100) {
            engineOverHeat++;
            document.getElementById("temperature").style.color = "green";
        }
        if (engineOverHeat > 75) {
            document.getElementById("temperature").style.color = "red";
        }
        document.getElementById("temperature").innerHTML = engineOverHeat + " Degrees";
    }, 1000);

// Speed managment system
function Speed() {
    if (engineOutput == 100) {
        speed = 258;
        }
    document.getElementById("speed").innerHTML = speed + " kph";
    document.getElementById("speed").style.color = "green";
}
Speed();