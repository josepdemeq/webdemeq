// ---- SCROLL TOP
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ---- CAMBIO POSICIÓN ----------------

// ---- Nav

$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    } 
    
  }); 
  
});


// ---- Botón Whatsapp

$(function () { 
  var mail = $(".whats"); 
  $(window).scroll(function () { 
      var scroll = $(window).scrollTop(); 

      if (scroll >= 790) { 
        mail.removeClass('whats') 
                  .addClass("whats-scroll"); 
      } else { 
        mail.removeClass("whats-scroll") 
                  .addClass('whats'); 
      } 
  }); 
});  

// ---- Botón Mail

$(function () { 
  var mail = $(".mail-btn"); 
  $(window).scroll(function () { 
      var scroll = $(window).scrollTop(); 

      if (scroll >= 790) { 
        mail.removeClass('mail-btn') 
                  .addClass("mail-btn-scroll"); 
      } else { 
        mail.removeClass("mail-btn-scroll") 
                  .addClass('mail-btn'); 
      } 
  }); 
});  

// ---- Nav-productos

$(function () { 
  var second = $(".second-nav"); 
  $(window).scroll(function () { 
      var scroll = $(window).scrollTop(); 

      if (scroll >= 540) { 
        second.removeClass('second-nav') 
                  .addClass("second-nav-scroll"); 
      } else { 
        second.removeClass("second-nav-scroll") 
                  .addClass('second-nav'); 
      } 
  }); 
});  


// ---- Nav serie active on click

var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height -100,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('li').removeClass('qs-activado');
      sections.removeClass('qs-activado');
      
      $(this).addClass('qs-activado');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('qs-activado');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
  
  return false;
});


// ---- Slide up Serie Destacado

$(document).ready(function() {
  $('.foot').click(function() {
      if($('.foot').hasClass('slide-up')) {
        $('.foot').addClass('slide-down', 500);
        $('.foot').removeClass('slide-up'); 
      } else {
        $('.foot').removeClass('slide-down');
        $('.foot').addClass('slide-up', 500); 
      }
  });
});
