var c = document.getElementById( "blueHouse" );
var ctx = c.getContext("2d");

// murs
ctx.fillStyle = "#A2D8E5";
ctx.fillRect(200,100,250,250);
// fenêtres
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(220,150,50,50);
ctx.fillRect(325,150,50,50);
// porte
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(275,250,50,100);
// toit
ctx.beginPath();
ctx.moveTo(300,20);
ctx.lineTo(200,100);
ctx.lineTo(400,100);
ctx.closePath();
ctx.fillStyle = "#D68241";
ctx.fill();
