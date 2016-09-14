var countMins = 0;
var countSecs = 0;
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var counter = setInterval(function() {
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
    }, 1000);

var minutesInc = function() {
  countMins++
  if(countMins < 10) {
    minutes.innerHTML = '0' + countMins;
  } else if(countMins >= 10 && countMins < 60) {
    minutes.innerHTML = countMins;
  } else if(countMins === 60) {
    minutes.innerHTML = '00';
  }
} 

counter();