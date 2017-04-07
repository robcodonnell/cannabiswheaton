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

$('.para-box').waypoint(function () {
  $('.para-box').css('opacity', 1);
},
{ offset: '80%' });

$('.team-profiles').waypoint(function () {
  $('.team-profiles').css('opacity', 1);
},
{ offset: '50%' });

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
