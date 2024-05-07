const minutes = 0;
const seconds = 0;
const miliseconds = 0;
const getmin = document.getElementById("min");
const getsec = document.getElementById("sec");
const getmili = document.getElementById("msec");
let interval;

function start() {
  interval = setInterval(function () {
    miliseconds++;
    getmili.innerHTML = miliseconds;
    if (miliseconds >= 100) {
      seconds++;
      getsec.innerHTML = seconds;
      miliseconds = 0;
    } else if (seconds >= 60) {
      minutes++;
      getmin.innerHTML = minutes;
      seconds = 0;
    }
    document.getElementById("start").disabled = true;
  }, 10);
}
function stop() {
  clearInterval(interval);
  document.getElementById("start").disabled = false;
}
function reset() {
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  getmin.innerHTML = minutes;
  getsec.innerHTML = seconds;
  getmili.innerHTML = miliseconds;
}
