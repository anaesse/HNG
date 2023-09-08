const UTC = new Date();
let ms = UTC.getUTCMilliseconds();
// UTC.setUTCMilliseconds(UTC.getUTCMilliseconds());
document.getElementById("currentUTCTime").innerHTML = ms;

const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const presentDay = new Date();
let Day = week[presentDay.getDay() ]
document.getElementById("currentDay").innerHTML = Day