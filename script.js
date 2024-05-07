let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let getmin = document.getElementById("min");
let getsec = document.getElementById("sec");
let getmili = document.getElementById("msec");
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
    document.getElementById("check").disabled = true;
  }, 10);
}
function stop() {
  clearInterval(interval);
  document.getElementById("check").disabled = false;
}
function reset() {
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  getmin.innerHTML = minutes;
  getsec.innerHTML = seconds;
  getmili.innerHTML = miliseconds;
}
