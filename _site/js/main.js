var $way = $('.way');
var $nav = $('nav');

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.opacity = "1";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.opacity = "0";
};

$way.waypoint(function () {
  $nav.toggleClass('bg-navy');
});
