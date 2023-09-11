// Current Weekday section
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const currentDate = new Date();
let day = weekday[currentDate.getDay()];
document.getElementById("CurrentDay").innerHTML = day;


// Current Time section
const CurrentUTCtime = new Date(currentDate);
let time = CurrentUTCtime.getTime();
let hours=CurrentUTCtime.getUTCHours();
const minutes=CurrentUTCtime.getUTCMinutes();
const Currenttime=`${hours}:${minutes<10?"0" : ""}${minutes}`;

document.getElementById("CurrentUTCtime").innerHTML = Currenttime;