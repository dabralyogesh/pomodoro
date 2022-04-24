let remainingTime;
let interval;
let timeDuration = 25;
function getRemainingTime(endTime) {
  const currentTime = Date.parse(new Date());
  const difference = endTime - currentTime;

  const total = Number.parseInt(difference / 1000, 10);
  console.log('Total : ', total);
  const minutes = Number.parseInt((total / 60) % 60, 10);
  console.log('Minutes :', minutes);
  const seconds = Number.parseInt(total % 60, 10);
  console.log('Seconds :', seconds);
  console.log('******************');

  return {
    total,
    minutes,
    seconds,
  };
}

function timer(mins = 0) {
  const endTime = Date.parse(new Date()) + mins * 60 * 1000;
  interval = setInterval(function () {
    remainingTime = getRemainingTime(endTime);
    showClock();
    let total = remainingTime.total;
    if (total <= 0) {
      clearInterval(interval);
    }
  }, 1000);
}

// This function is basically responsible for making changes on UI.
function updateTime(minutes, seconds) {
  minutes = `${minutes}`.padStart(2, "0");
  seconds = `${seconds}`.padStart(2, "0");
  const minElement = document.getElementById("minutes");
  const secElement = document.getElementById("seconds");
  minElement.textContent = minutes;
  secElement.textContent = seconds;
}

function showClock() {
  updateTime(remainingTime.minutes, remainingTime.seconds);
}
function resetTimer() {
  clearInterval(interval);
}

function onPomodorClickHandler() {
  resetTimer();
  updateTime(25, 0);
  timeDuration = 25;
}

function onlongBreakClickHandler() {
  resetTimer();
  updateTime(15, 0);
  timeDuration = 15;
}

function onshortBreakClickHandler() {
  resetTimer();
  updateTime(5, 0);
  timeDuration = 5;
}
function onStartClickHandler() {
  timer(timeDuration);
}

function onStopClickHandler() {
  resetTimer();
  updateTime(timeDuration, 0);
}
