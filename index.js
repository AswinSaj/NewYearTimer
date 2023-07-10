const elDays = document.getElementById("days");
const elHours = document.getElementById("hours");
const elminute = document.getElementById("minutes");
const elSeconds = document.getElementById("seconds");

const newYear = "1 Jan 2024";
function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const totalSeconds = Math.floor((newYearDate - currentDate) / 1000);
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minute = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  elDays.textContent = days;
  elHours.innerHTML = hours;
  elminute.innerHTML = minute;
  elSeconds.innerHTML = seconds;
}
setInterval(countDown, 1000);
countDown();
