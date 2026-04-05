function updateClock(){

let now = new Date();

let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

let hourDeg = (hour % 12) * 30 + minute * 0.5;
let minuteDeg = minute * 6;
let secondDeg = second * 6;

document.getElementById("hour").style.transform =
`rotate(${hourDeg}deg)`;

document.getElementById("minute").style.transform =
`rotate(${minuteDeg}deg)`;

document.getElementById("second").style.transform =
`rotate(${secondDeg}deg)`;

}

setInterval(updateClock,1000);
updateClock();