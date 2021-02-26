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

$(function () { 
  var navbar = $(".navbar-brand"); 
  $(window).scroll(function () { 
      var scroll = $(window).scrollTop(); 

      if (scroll >= 50) { 
        navbar.removeClass('navbar-brand') 
                  .addClass("navbar-brand-scroll"); 
      } else { 
        navbar.removeClass("navbar-brand-scroll") 
                  .addClass('navbar-brand'); 
      } 
  }); 
});

// ---- Botón Whatsapp

$(function () { 
  var whatsapp = $(".whats"); 
  $(window).scroll(function () { 
      var scroll = $(window).scrollTop(); 

      if (scroll >= 790) { 
        whatsapp.removeClass('whats') 
                  .addClass("whats-scroll"); 
      } else { 
        whatsapp.removeClass("whats-scroll") 
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