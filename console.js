let speed = 258;
let engineOutput = 100;
let engineOverHeat = 70;
let maxTemp = 100;

window.setInterval(
    function () {
        if (engineOverHeat < 100) {
            engineOverHeat++;
            document.getElementById("speed").style.color = "white";
        }
        if (engineOverHeat > 75) {
            document.getElementById("speed").style.color = "red";
        }
        document.getElementById("speed").innerHTML = engineOverHeat + " kph";
    }, 1000);

console.log(engineOverHeat);
if (warning > 75) {
    document.getElementById("speed").style.color="red !important";
}