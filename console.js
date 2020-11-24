let speed;
let engineOutput = 100;
let engineOverHeat = 70;
let maxTemp = 100;
let coolent = 200.75;
coolent.toFixed(2);
let maxCooolent = 200;

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

// coolent readout
function Coolent() {
let usage = 0.01;
    window.setInterval(

        function () {
            while(engineOverHeat > 75) {
                engineOverHeat--;
                coolent - usage;
            }
            document.getElementById("coolent").innerHTML = coolent + " / " + maxCooolent;
            document.getElementById("coolent").style.color = "green";
            console.log(coolent);
        }, 1000)

}
Coolent();