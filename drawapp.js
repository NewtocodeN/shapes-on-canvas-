var c = document.getElementById("mycanvas");var ctx = c.getContext("2d");// last known positionlet coord = {  x: 0,  y: 0};document.addEventListener("mousedown", start);document.addEventListener("mouseup", stop);window.addEventListener("resize", resize);resize();function resize() {  ctx.canvas.width = window.innerWidth;  ctx.canvas.height = window.innerHeight;}function reposition(event) {  coord.x = event.clientX - c.offsetLeft;  coord.y = event.clientY - c.offsetTop;  document.getElementById('mycanavas').innerHTML = c;}function start(event) {  document.addEventListener("mousedown", start);  reposition();}function stop() {  document.addEventListener("mouseup", stop);  reposition();}function draw(event) {  if (shape == 'circle') {    circle();  }  document.getElementById('mycanvas').innerHTML = draw;  console.log('draw works');}function shapes() {  var cir = circle();  //draw circle a number of times   for (var i = 0; i < shapes; i++) {    return cir;  }  document.getElementById('mycanvas').innerHTML = shapes;  draw();  console.log('shapes works');}function circle() {  ctx.beginPath();  ctx.arc(100, 75, 50, 0, 2 * Math.PI);  ctx.stroke(); // draw circle  ctx.fill();  ctx.moveTo(coord.x, coord.y);  ctx.lineTo(coord.x, coord.y);  console.log('circle button works');}function erase() {  ctx.fillStyle = "aqua";  ctx.fillRect(0, 0, 300, 150);  ctx.clearRect(20, 20, 100, 50);  document.getElementById('mycanvas').innerHTML = erase;  console.log('erase works');}