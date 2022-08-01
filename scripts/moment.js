const learnValue = document.getElementById("learn");
function update(){
    
var now = new Date();
var learning = new Date(2022, 6, 2);
var elapsedT = now - learning;
var seconds = elapsedT / 1000;
var minutes = seconds / 60;
var hours = minutes / 60;
var days = hours / 24

learnValue.innerHTML = `${Math.floor(days)} days ${Math.floor(hours%24)} hours ${Math.floor(minutes%60)} minutes ${Math.floor(seconds%60)} seconds :)`}

setInterval(update, 1000);