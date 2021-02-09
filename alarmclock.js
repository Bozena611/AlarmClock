function setAlarm() {
	const timeRemaining = document.getElementById("timeRemaining");
  let setAlarm = document.getElementById("alarmSet");
  let time = setAlarm.valueAsNumber;
    
  if (time < 10) {
  	timeRemaining.innerText = "Time Remaining: 00:" + time;
  } else {
    timeRemaining.innerText = "Time Remaining: 00:0 " + time;
  }

  let counter = time;

  function countdown(counter) {
    if (counter > 0) {
      counter--;
      setTimeout(function() {countdown(counter)}, 1000);
      timeRemaining.innerText = "Time Remaining: 00:" + (counter < 10 ? "0" + counter : counter);
    } else {
    	timeRemaining.style.backgroundColor = "red";
      playAlarm()
    }
  }

  countdown(counter);
}

let audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
