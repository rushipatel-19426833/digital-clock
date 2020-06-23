// variable declaration
function showTime() {
  let date = new Date();
  let hours = date.getHours(); // get hours
  let minutes = date.getMinutes(); // get minutes
  let seconds = date.getSeconds(); // get seconds

  let formatHours = convertFormat(hours);

  hours = checkTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  // get time and present them in HH:MM:SS format
  document.getElementById(
    "clock"
  ).innerHTML = `${hours} : ${minutes} : ${seconds}
    ${formatHours}`;
}

// Converting the 24Hr time to 12Hr time with AM and PM
function convertFormat(time) {
  let format = "AM";
  if (time >= 12) {
    format = "PM";
  }
  return format;
}

function checkTime(time) {
  if (time > 12) {
    time = time - 12;
  }
  if (time === 0) {
    time = 12;
  }
  return time;
}

function addZero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

// This part of the code I have taken from LIZ's codepen: https://codepen.io/lizcoultersmith/pen/abOKjGj
/* With this code the greetings for afternoon was not working so i have changed the if statement so there are three different greeting that user will get based on the time.*/

function setBgGreet() {
  let date = new Date(),
    hour = date.getHours();

  // Morning
  if (hour < 12) {
    greeting.textContent = "Good Morning. Have a nice day!!";
  }
  // Afternoon
  else if (hour >= 12 && hour <= 18) {
    greeting.textContent = "Good Afternoon! ";
  }

  // Evening
  else if (hour >= 18 && hour <= 24) {
    greeting.textContent = "Good Evening! ";
    document.body.style.color = "white";
  }
}

setBgGreet();
showTime();
setInterval(showTime, 1000);
