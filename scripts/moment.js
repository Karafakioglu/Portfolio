var now = new Date();
var learning = new Date(2022, 6, 2);
var elapsedT = now - learning;
var seconds = elapsedT / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24



console.log(elapsedT)
console.log(days)

document.getElementById("learn").innerHTML = Math.floor(days)