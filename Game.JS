
window.startTimer = function (elementId, callback) {
  let remainingSeconds = 120;
  const timerElement = document.getElementById(elementId);

  const interval = setInterval(() => {
    remainingSeconds--;
    timerElement.textContent = remainingSeconds + " seconds";

    if (remainingSeconds <= 0) {
      clearInterval(interval);
      callback();
    }
  }, 1000);

  return interval;
};

window.stopTimer = function (intervalId) {
  clearInterval(intervalId);
};
