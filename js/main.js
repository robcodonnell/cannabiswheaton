//nav
var $way = $('.way');
var $nav = $('nav');

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("myNav").style.opacity = ".95";
};

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.opacity = "0";
};

$way.waypoint(function () {
  $nav.toggleClass('bg-navy');
});

//page builds
$('.para-box').waypoint(function () {
  $('.para-box').css('opacity', 1);
},
{ offset: '80%' });

$('.team-profiles').waypoint(function () {
  $('.team-profiles').css('opacity', 1);
},
{ offset: '50%' });

//smooth-scroll arrow
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

//gifs
$(document).ready(function () {
  $(".gif-one").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1492722194/future-positioning_m7ghp1.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-two").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1492722194/future-positioning_m7ghp1.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-three").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1492722194/future-positioning_m7ghp1.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-four").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1492722194/future-positioning_m7ghp1.gif?" + Math.random());
});

$('.grid-one').waypoint(function () {
  $('.gif-one').css({
    'display' : 'block'
});
},
{ offset: '70%' });

$('.grid-two').waypoint(function () {
  $('.gif-two').css({
    'display' : 'block'
});
},
{ offset: '70%' });

$('.grid-three').waypoint(function () {
  $('.gif-three').css({
    'display' : 'block'
});
},
{ offset: '70%' });

$('.grid-four').waypoint(function () {
  $('.gif-four').css({
    'display' : 'block'
});
},
{ offset: '70%' });
