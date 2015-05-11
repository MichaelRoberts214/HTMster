// JavaScript file for index.html

// Draw rectangle to canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.beginPath();
context.rect(20,20,400,200);
context.fillStyle = '#3D3D3D';
context.fill();
context.lineWidth = 2;
context.strokeStyle = '#FFFFFF';
context.stroke();
