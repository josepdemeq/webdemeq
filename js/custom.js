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
    
    if (scrollTop >= 300) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 300) {
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

 

// ---- Nav Secundario Serie collapse
$(document).ready(function () {
  $("nav").find("li").on("click", "a", function () {
      $('.navbar-collapse.show').collapse('hide');
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
      nav.find('li').removeClass('activado');
      sections.removeClass('activado');
      
      $(this).addClass('activado');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('activado');
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



// ---- Tooltips comparativa


$("[data-toggle=tooltip").tooltip();



// ---- Datacenter Video: seleccion de características

var myvideo = document.getElementById('myvideo'),
    jumplink1 = document.getElementById('jump1');

jumplink1.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 0;
    myvideo.play();
}, false);

var myvideo = document.getElementById('myvideo'),
    jumplink2 = document.getElementById('jump2');

jumplink2.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 4;
    myvideo.play();
}, false);

var myvideo = document.getElementById('myvideo'),
    jumplink3 = document.getElementById('jump3');

jumplink3.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 8;
    myvideo.play();
}, false);

var myvideo = document.getElementById('myvideo'),
    jumplink4 = document.getElementById('jump4');

jumplink4.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 12;
    myvideo.play();
}, false);

var myvideo = document.getElementById('myvideo'),
    jumplink5 = document.getElementById('jump5');

jumplink5.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 16;
    myvideo.play();
}, false);

var myvideo = document.getElementById('myvideo'),
    jumplink6 = document.getElementById('jump6');

jumplink6.addEventListener("click", function (event) {
    event.preventDefault();
    myvideo.currentTime = 20;
    myvideo.play();
}, false);



// ---- Datacenter Video: Hover características

document.getElementsByTagName('video')[0].addEventListener('timeupdate', function () {

  if (this.currentTime > 0.1 && this.currentTime < 4) {
    document.getElementById("jump1").classList.add('active-espec'), 0.3,
    document.getElementById("collapseOne").classList.add('show'), 0.3;
    } else {
      document.getElementById("jump1").classList.remove('active-espec'), 0.3,
      document.getElementById("collapseOne").classList.remove('show'), 0.3;
    }

  if (this.currentTime > 4 && this.currentTime < 8) {
    document.getElementById("jump2").classList.add('active-espec'), 0.3,
    document.getElementById("collapseTwo").classList.add('show'), 0.3;
    } else {
      document.getElementById("jump2").classList.remove('active-espec'), 0.3,
      document.getElementById("collapseTwo").classList.remove('show'), 0.3;
    }

  if (this.currentTime > 8 && this.currentTime < 12) {
    document.getElementById("jump3").classList.add('active-espec'), 0.3,
    document.getElementById("collapseThree").classList.add('show'), 0.3;
    } else {
      document.getElementById("jump3").classList.remove('active-espec'), 0.3,
      document.getElementById("collapseThree").classList.remove('show'), 0.3;
    }

  if (this.currentTime > 12 && this.currentTime < 16) {
    document.getElementById("jump4").classList.add('active-espec'), 0.3,
    document.getElementById("collapseFour").classList.add('show'), 0.3;
    } else {
      document.getElementById("jump4").classList.remove('active-espec'), 0.3,
      document.getElementById("collapseFour").classList.remove('show'), 0.3;
    }

  if (this.currentTime > 16 && this.currentTime < 20) {
    document.getElementById("jump5").classList.add('active-espec'), 0.3,
    document.getElementById("collapseFive").classList.add('show'), 0.3;
    } else {
      document.getElementById("jump5").classList.remove('active-espec'), 0.3,
      document.getElementById("collapseFive").classList.remove('show'), 0.3;
    }
          
  if (this.currentTime > 20 && this.currentTime < 24) {
    document.getElementById("jump6").classList.add('active-espec'), 0.3,
    document.getElementById("collapseSix").classList.add('show'), 0.3;
    } else {
      document.getElementById("jump6").classList.remove('active-espec'), 0.3,
      document.getElementById("collapseSix").classList.remove('show'), 0.3;
    }

}, false);
