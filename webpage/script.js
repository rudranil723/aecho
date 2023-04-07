
var loader = document.getElementById("pre-loader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


$('.carousel').carousel({
  pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#FFFF";
  } else {
   
    document.getElementById("navbar").style.background = "none";
  }
}
