window.onscroll = function() {Scrollbar()};

function Scrollbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function fontFunction() {
  document.getElementById("para").classList.toggle("hidden");
  document.getElementById("para").style.animation = 'slidey 1000ms';
}
