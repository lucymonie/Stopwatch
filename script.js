var countMins = 0;
var countSecs = 0;
var countHunds = 0;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var hundredths = document.getElementById("hund");
var startButton = document.getElementById("start");
var pauseButton = document.getElementById("pause");
var resetButton = document.getElementById("reset");
var isPaused = true;

  pauseButton.addEventListener('click', function(e) {
     e.preventDefault();
     isPaused = true;
  });

  startButton.addEventListener('click', function(e) {
    e.preventDefault();
    isPaused = false;
  });

  resetButton.addEventListener('click', function(e) {
    e.preventDefault();
    isPaused = true;
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    hundredths.innerHTML = '000';
    countMins = 0;
    countSecs = 0;
    countHunds = 0;
  });

  setInterval(function() {
    if(!isPaused) {
      countHunds+=10;
      if (countHunds < 10) {
        hundredths.innerHTML = '0' + countHunds;
      } else if (countHunds >= 10 && countHunds < 100) {
        hundredths.innerHTML = '0' + countHunds;
      } else if (countHunds >= 100 && countHunds < 1000) {
        hundredths.innerHTML = countHunds;
      } else if (countHunds===1000) {
        secondsInc();
        hundredths.innerHTML = '000';
        countHunds = 0;      
      }
    }      
  }, 10);

 function secondsInc() {
  countSecs++;
    if(countSecs < 10) {
      seconds.innerHTML = '0' + countSecs;
    } else if(countSecs >= 10 && countSecs < 60) {
      seconds.innerHTML = countSecs;
    } else if(countSecs === 60) {
      minutesInc();
      seconds.innerHTML = '00';
      countSecs = 0;
    }
  }

  function minutesInc() {
  countMins++;
    if(countMins < 10) {
      minutes.innerHTML = '0' + countMins;
    } else if(countMins >= 10 && countMins < 60) {
      minutes.innerHTML = countMins;
    } else if(countMins === 60) {
      minutes.innerHTML = '00';
      countMins = 0;
    }
  }