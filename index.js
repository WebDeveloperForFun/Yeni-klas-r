var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath(); // Yeni bir çizim yolu başlatılır
ctx.moveTo(50, 50); // Başlangıç noktasını belirler
ctx.lineTo(100, 100); // Başlangıç noktasından başlayarak bir çizgi çizer
ctx.stroke(); // Çizim yolu üzerindeki çizgiyi çizer

ctx.moveTo(150, 150); // Yeni bir başlangıç noktası belirler
ctx.lineTo(200, 200); // Yeni başlangıç noktasından başlayarak bir çizgi çizer
ctx.stroke(); // Yeni çizim yolu üzerindeki çizgiyi çizer
