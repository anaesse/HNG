const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const presentDay = new Date();
let Day = week[presentDay.getDay() ]
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = Day

const UTC = new Date();
let ms = UTC.getUTCMilliseconds();
document.querySelector('[data-testid="currentUTCTime"]').textContent = ms;




