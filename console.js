let speed = 258;
let engineOutput = 100;
let engineOverHeat = 70;
let maxTemp = 100;

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
