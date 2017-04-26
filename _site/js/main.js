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

$('.about-graphic').waypoint(function () {
  $('.about-graphic > .small-graphic').css('opacity', 1);
  $('.about-graphic > .med-graphic').css('opacity', 1);
  $('.about-graphic > .large-graphic').css('opacity', 1);
},
{ offset: '80%' });

$('.numbers-graphic').waypoint(function () {
  $('.numbers-graphic > .small-graphic').css('opacity', 1);
  $('.numbers-graphic > .med-graphic').css('opacity', 1);
  $('.numbers-graphic > .large-graphic').css('opacity', 1);
},
{ offset: '80%' });

$('.connect-hero').waypoint(function () {
  $('.map-graphic').css('opacity', 1);
},
{ offset: '60%' });

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
  $(".gif-two").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1493059181/diversification_dgeb5l.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-three").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1493059181/upside_vs45lj.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-four").attr("src", "https://res.cloudinary.com/dtbrkt2ur/image/upload/v1493059181/brands_gk0jpv.gif?" + Math.random());
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

/*
$('.text-huge-green').waypoint(function () {
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
},
{ offset: '90%' });
*/
