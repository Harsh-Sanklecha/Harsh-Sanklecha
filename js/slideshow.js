var slides = document.getElementsByClassName("slide");
var index = 0;
function goLeft() {
  if(index == 0) index = slides.length - 1;
  else index--;

  slides[0].style.marginLeft = "-" + index * 900 + "px";
}
function goRight() {
  if(index == slides.length -1) index = 0;
  else index++;

  slides[0].style.marginLeft = "-" + index * 900 + "px";
}

//for auto Navigation

setInterval(goRight,3000);
