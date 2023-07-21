//setting vaariables
const second = document.querySelector("#seconds-hand");
const hour = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");

setInterval(() => {
  var date = new Date();
  sec = date.getSeconds();
  console.log(sec);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours > 12) {
    hours = hours - 12;
  }
  hour.style.rotate = -90 + hours * 30 + minutes / 2 + "deg";
  minuteHand.style.rotate = -90 + minutes * 6 + "deg";
  second.style.rotate = -90 + sec * 6 + "deg";
}, 1000);
