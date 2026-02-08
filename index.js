let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

function updateDisplay() {
  document.getElementById("display").innerText =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function start() {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }

    updateDisplay();
  }, 1000);
}

function stop() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  stop();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}
