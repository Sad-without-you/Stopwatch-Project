const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStopBtn");
let savePoints = document.getElementById("savePoints").querySelector("tbody");
const tickSound = document.getElementById("tickSound");

let seconds = 0;
let minutes = 0;
let hours = 0;
let run = false;
let interval;

function startStop() {

    if (!run) {
        interval = setInterval(updateTimer, 1000);
        run = true;
        startStopBtn.textContent = "Stop"

    }
    else {
        clearInterval(interval);
        run = false;
        startStopBtn.textContent = "Start"

        saveTime();
    }
}

function reset() {

    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(interval);
    run = false
    display.textContent = "00:00:00";
    startStopBtn.textContent = "Start"

    savePoints.innerHTML = "";

}

function getPrefix(number) {
    if (number < 10) {
        return "0";
    }
    else {
        return "";
    }
}

function saveTime() {
    if (tbody.rows.length >= 7) {
        tbody.deleteRow(0);
    }

    const newRow = savePoints.insertRow();
    const newCell = newRow.insertCell();
    newCell.textContent = display.textContent;
}

function updateTimer() {
    seconds += 1;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    display.textContent = getPrefix(hours) + hours + ":" + getPrefix(minutes) + minutes + ":" + getPrefix(seconds) + seconds;

    tickSound.play();
}


