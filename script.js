// When the user scrolls the page, execute myFunction
window.onscroll = function() {stick()};

// Get the header
var header = document.getElementById("wsac-nav");

// Get the offset position of the navbar
var sticky = 180;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function stick() {
	
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}