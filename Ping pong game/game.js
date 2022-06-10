// maak gebruik van comments 
const canvas = document.getElementById("pong");
const context = canvas.getContext('2d');
//Shaik zei schiet op 
context.fillStyle = 'red'
context.fillRect(100,200,50,75);
context.beginPath();
context.arc(300, 350, 100, 0, Math.PI*2, false);
