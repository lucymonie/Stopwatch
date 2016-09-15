var countMins = 0;
var countSecs = 0;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
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
    countMins = 0;
    countSecs = 0;
  });

  var counter = setInterval(function() {
    if(!isPaused) {
      countSecs++;
      if(countSecs < 10) {
        seconds.innerHTML = '0' + countSecs;
      } else if (countSecs >= 10 && countSecs < 60) {
        seconds.innerHTML = countSecs;
      } else if (countSecs === 60) {
        seconds.innerHTML = '00';
        minutesInc();
        countSecs = 0;        
      }
    }      
  }, 1000);

  var minutesInc = function() {
  countMins++;
    if(countMins < 10) {
      minutes.innerHTML = '0' + countMins;
    } else if(countMins >= 10 && countMins < 60) {
      minutes.innerHTML = countMins;
    } else if(countMins === 60) {
      minutes.innerHTML = '00';
    }
  }