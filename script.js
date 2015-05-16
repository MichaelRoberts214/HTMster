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

var validateForm = function() {
  var firstInput = document.forms["myForm"]["first"].value;
  var secondInput = document.forms["myForm"]["second"].value;
  var thirdInput = document.forms["myForm"]["third"].value;

  if(firstInput === null || firstInput === "") {
    alert('First Input Required');
    return false;
  }

  else if(secondInput === null || secondInput === "") {
    alert('Second Input Required');
    return false;
  }

  else if(thirdInput === null || thirdInput === "") {
    alert('Third Input Required');
    return false;
  }
}
