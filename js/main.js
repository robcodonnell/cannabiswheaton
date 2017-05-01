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

$('.connect-hero').waypoint(function () {
  $('.map-graphic').css('opacity', 1);
},
{ offset: '60%' });

$('.clinic-count').waypoint(function () {
  $('.clinic-count').css('opacity', 1);
},
{ offset: '80%' });

$('.patient-count').waypoint(function () {
  $('.patient-count').css('opacity', 1);
},
{ offset: '80%' });

$('.partner-count').waypoint(function () {
  $('.partner-count').css('opacity', 1);
},
{ offset: '80%' });

$('.footage-count').waypoint(function () {
  $('.footage-count').css('opacity', 1);
},
{ offset: '80%' });

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

//form submit button
$(document).ready(function(){
   $(document).on("click",".submit-btn",function(){
     var form = $(this).closest("form");
     //console.log(form);
     form.submit();
   });
});

//gifs
$(document).ready(function () {
  $(".gif-one").attr("src", "https://cannabiswheaton.co/images/future-positioning.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-two").attr("src", "https://cannabiswheaton.co/images/diversification.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-three").attr("src", "https://cannabiswheaton.co/images/upside.gif?" + Math.random());
});

$(document).ready(function () {
  $(".gif-four").attr("src", "https://cannabiswheaton.co/images/brands.gif?" + Math.random());
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

// stock ticker
