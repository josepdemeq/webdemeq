

//-------- Elección modelo


//----- QH7 L
$('#plus-7l').click(function add() {
  var $qtde = $(".cant-7l");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-7l").attr("disabled", true);
    };
      $("#minus-7l").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-7l").attr("disabled", !$(".cant-7l").val());

$('#minus-7l').click(function minust() {
  var $qtde = $(".cant-7l");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-7l").attr("disabled", true);
  }
  $("#plus-7l").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-7l").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-7l").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- QH7 U
$('#plus-7u').click(function add() {
  var $qtde = $(".cant-7u");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-7u").attr("disabled", true);
    };
      $("#minus-7u").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-7u").attr("disabled", !$(".cant-7u").val());

$('#minus-7u').click(function minust() {
  var $qtde = $(".cant-7u");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-7u").attr("disabled", true);
  }
  $("#plus-7u").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-7u").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-7u").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- QH7 C
$('#plus-7c').click(function add() {
  var $qtde = $(".cant-7c");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-7c").attr("disabled", true);
    };
      $("#minus-7c").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-7c").attr("disabled", !$(".cant-7c").val());

$('#minus-7c').click(function minust() {
  var $qtde = $(".cant-7c");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-7c").attr("disabled", true);
  }
  $("#plus-7c").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-7c").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-7c").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});



//----- QH5 U
$('#plus-5u').click(function add() {
  var $qtde = $(".cant-5u");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5u").attr("disabled", true);
    };
      $("#minus-5u").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5u").attr("disabled", !$(".cant-5u").val());

$('#minus-5u').click(function minust() {
  var $qtde = $(".cant-5u");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5u").attr("disabled", true);
  }
  $("#plus-5u").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5u").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5u").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QH5 D
$('#plus-5d').click(function add() {
  var $qtde = $(".cant-5d");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5d").attr("disabled", true);
    };
      $("#minus-5d").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5d").attr("disabled", !$(".cant-5d").val());

$('#minus-5d').click(function minust() {
  var $qtde = $(".cant-5d");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5d").attr("disabled", true);
  }
  $("#plus-5d").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5d").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5d").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QH5 G
$('#plus-5g').click(function add() {
  var $qtde = $(".cant-5g");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5g").attr("disabled", true);
    };
      $("#minus-5g").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5g").attr("disabled", !$(".cant-5g").val());

$('#minus-5g').click(function minust() {
  var $qtde = $(".cant-5g");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5g").attr("disabled", true);
  }
  $("#plus-5g").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5g").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5g").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QH5 M
$('#plus-5m').click(function add() {
  var $qtde = $(".cant-5m");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5m").attr("disabled", true);
    };
      $("#minus-5m").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5m").attr("disabled", !$(".cant-5m").val());

$('#minus-5m').click(function minust() {
  var $qtde = $(".cant-5m");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5m").attr("disabled", true);
  }
  $("#plus-5m").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5m").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5m").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QH2 S
$('#plus-2s').click(function add() {
  var $qtde = $(".cant-2s");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2s").attr("disabled", true);
    };
      $("#minus-2s").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2s").attr("disabled", !$(".cant-2s").val());

$('#minus-2s').click(function minust() {
  var $qtde = $(".cant-2s");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2s").attr("disabled", true);
  }
  $("#plus-2s").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2s").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2s").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS2 DL
$('#plus-2dls').click(function add() {
  var $qtde = $(".cant-2dls");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2dls").attr("disabled", true);
    };
      $("#minus-2dls").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2dls").attr("disabled", !$(".cant-2dls").val());

$('#minus-2dls').click(function minust() {
  var $qtde = $(".cant-2dls");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2dls").attr("disabled", true);
  }
  $("#plus-2dls").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2dls").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2dls").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QH2 P
$('#plus-2p').click(function add() {
  var $qtde = $(".cant-2p");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2p").attr("disabled", true);
    };
      $("#minus-2p").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2p").attr("disabled", !$(".cant-2p").val());

$('#minus-2p').click(function minust() {
  var $qtde = $(".cant-2p");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2p").attr("disabled", true);
  }
  $("#plus-2p").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2p").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2p").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QH2 DLP
$('#plus-2dlp').click(function add() {
  var $qtde = $(".cant-2dlp");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2dlp").attr("disabled", true);
    };
      $("#minus-2dlp").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2dlp").attr("disabled", !$(".cant-2dlp").val());

$('#minus-2dlp').click(function minust() {
  var $qtde = $(".cant-2dlp");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2dlp").attr("disabled", true);
  }
  $("#plus-2dlp").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2dlp").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2dlp").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//---------- Mostrar Checkbox accesorios seleccionados en resumen

function update(){
    var checkbox = $(this);
    var name = checkbox.data('name');
    if( checkbox.is(':checked') ) {   
      $( '#' + name ).show();
    } else {                      
      $( '#' + name ).hide();
    }          
  }
  
  //just setup change and each to use the same function
  $('.acc-check').change(update).each(update);

//--------- Activar checkbox

$(':checkbox').change(function(){
    $('input:text').eq($(':checkbox').index(this)).prop("disabled", !$(this).is(':checked'));
 });
 $(':checkbox').change();




//--------- Aumentar o disminuir número

//----- Dispositivo de impacto tipo D con cable y conector
$('#plus-di-dh2').click(function add() {
  var $qtde = $(".cant-di-dh2");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-dh2").attr("disabled", true);
    };
      $("#minus-di-dh2").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-dh2").attr("disabled", !$(".cant-di-dh2").val());

$('#minus-di-dh2').click(function minust() {
  var $qtde = $(".cant-di-dh2");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-dh2").attr("disabled", true);
  }
  $("#plus-di-dh2").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-dh2").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-dh2").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Dispositivo de impacto tipo D con Cal-Tag, cable y conector
$('#plus-di-dh5').click(function add() {
  var $qtde = $(".cant-di-dh5");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-dh5").attr("disabled", true);
    };
      $("#minus-di-dh5").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-dh5").attr("disabled", !$(".cant-di-dh5").val());

$('#minus-di-dh5').click(function minust() {
  var $qtde = $(".cant-di-dh5");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-dh5").attr("disabled", true);
  }
  $("#plus-di-dh5").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-dh5").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-dh5").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Dispositivo de impacto tipo D con Cal-Tag, Gyro-Tag, cable y conector
$('#plus-di-dh7').click(function add() {
  var $qtde = $(".cant-di-dh7");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-dh7").attr("disabled", true);
    };
      $("#minus-di-dh7").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-dh7").attr("disabled", !$(".cant-di-dh7").val());

$('#minus-di-dh7').click(function minust() {
  var $qtde = $(".cant-di-dh7");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-dh7").attr("disabled", true);
  }
  $("#plus-di-dh7").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-dh7").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-dh7").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Dispositivo de impacto tipo DC con cable y conector
$('#plus-di-dc').click(function add() {
  var $qtde = $(".cant-di-dc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-dc").attr("disabled", true);
    };
      $("#minus-di-dc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-dc").attr("disabled", !$(".cant-di-dc").val());

$('#minus-di-dc').click(function minust() {
  var $qtde = $(".cant-di-dc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-dc").attr("disabled", true);
  }
  $("#plus-di-dc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-dc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-dc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Dispositivo de impacto tipo DL con cable y conector
$('#plus-di-dl').click(function add() {
  var $qtde = $(".cant-di-dl");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-dl").attr("disabled", true);
    };
      $("#minus-di-dl").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-dl").attr("disabled", !$(".cant-di-dl").val());

$('#minus-di-dl').click(function minust() {
  var $qtde = $(".cant-di-dl");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-dl").attr("disabled", true);
  }
  $("#plus-di-dl").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-dl").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-dl").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Dispositivo de impacto tipo C con cable y conector
$('#plus-di-c').click(function add() {
  var $qtde = $(".cant-di-c");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-c").attr("disabled", true);
    };
      $("#minus-di-c").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-c").attr("disabled", !$(".cant-di-c").val());

$('#minus-di-c').click(function minust() {
  var $qtde = $(".cant-di-c");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-c").attr("disabled", true);
  }
  $("#plus-di-c").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-c").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-c").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Dispositivo de impacto tipo G con cable y conector
$('#plus-di-g').click(function add() {
  var $qtde = $(".cant-di-g");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-g").attr("disabled", true);
    };
      $("#minus-di-g").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-g").attr("disabled", !$(".cant-di-g").val());

$('#minus-di-g').click(function minust() {
  var $qtde = $(".cant-di-g");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-g").attr("disabled", true);
  }
  $("#plus-di-g").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-g").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-g").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Dispositivo de impacto tipo E con diamante sintetico para durezas altas, cable y conector
$('#plus-di-e').click(function add() {
  var $qtde = $(".cant-di-e");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-e").attr("disabled", true);
    };
      $("#minus-di-e").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-e").attr("disabled", !$(".cant-di-e").val());

$('#minus-di-e').click(function minust() {
  var $qtde = $(".cant-di-e");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-e").attr("disabled", true);
  }
  $("#plus-di-e").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-e").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-e").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Sonda UCI de 10N con cable y conector
$('#plus-s10n').click(function add() {
  var $qtde = $(".cant-s10n");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-s10n").attr("disabled", true);
    };
      $("#minus-s10n").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-s10n").attr("disabled", !$(".cant-s10n").val());

$('#minus-s10n').click(function minust() {
  var $qtde = $(".cant-s10n");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-s10n").attr("disabled", true);
  }
  $("#plus-s10n").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-s10n").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-s10n").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Sonda UCI de 50N con cable y conector
$('#plus-s50n').click(function add() {
  var $qtde = $(".cant-s50n");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-s50n").attr("disabled", true);
    };
      $("#minus-s50n").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-s50n").attr("disabled", !$(".cant-s50n").val());

$('#minus-s50n').click(function minust() {
  var $qtde = $(".cant-s50n");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-s50n").attr("disabled", true);
  }
  $("#plus-s50n").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-s50n").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-s50n").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Sonda UCI de 98N con cable y conector
$('#plus-s98n').click(function add() {
  var $qtde = $(".cant-s98n");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-s98n").attr("disabled", true);
    };
      $("#minus-s98n").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-s98n").attr("disabled", !$(".cant-s98n").val());

$('#minus-s98n').click(function minust() {
  var $qtde = $(".cant-s98n");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-s98n").attr("disabled", true);
  }
  $("#plus-s98n").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-s98n").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-s98n").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Juego de 12 anillos de apoyo
$('#plus-aa12').click(function add() {
  var $qtde = $(".cant-aa12");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-aa12").attr("disabled", true);
    };
      $("#minus-aa12").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-aa12").attr("disabled", !$(".cant-aa12").val());

$('#minus-aa12').click(function minust() {
  var $qtde = $(".cant-aa12");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-aa12").attr("disabled", true);
  }
  $("#plus-aa12").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-aa12").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-aa12").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Pasta de acople estándar para utilización en piezas chicas 50cc
$('#plus-pa50').click(function add() {
  var $qtde = $(".cant-pa50");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa50").attr("disabled", true);
    };
      $("#minus-pa50").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa50").attr("disabled", !$(".cant-pa50").val());

$('#minus-pa50').click(function minust() {
  var $qtde = $(".cant-pa50");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa50").attr("disabled", true);
  }
  $("#plus-pa50").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa50").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa50").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrón de referencia HLD
$('#plus-pr-hld').click(function add() {
  var $qtde = $(".cant-pr-hld");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-hld").attr("disabled", true);
    };
      $("#minus-pr-hld").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-hld").attr("disabled", !$(".cant-pr-hld").val());

$('#minus-pr-hld').click(function minust() {
  var $qtde = $(".cant-pr-hld");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-hld").attr("disabled", true);
  }
  $("#plus-pr-hld").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-hld").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-hld").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrón de referencia HLDL
$('#plus-pr-hldl').click(function add() {
  var $qtde = $(".cant-pr-hldl");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-hldl").attr("disabled", true);
    };
      $("#minus-pr-hldl").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-hldl").attr("disabled", !$(".cant-pr-hldl").val());

$('#minus-pr-hldl').click(function minust() {
  var $qtde = $(".cant-pr-hldl");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-hldl").attr("disabled", true);
  }
  $("#plus-pr-hldl").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-hldl").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-hldl").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrón de referencia HLC
$('#plus-pr-hlc').click(function add() {
  var $qtde = $(".cant-pr-hlc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-hlc").attr("disabled", true);
    };
      $("#minus-pr-hlc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-hlc").attr("disabled", !$(".cant-pr-hlc").val());

$('#minus-pr-hlc').click(function minust() {
  var $qtde = $(".cant-pr-hlc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-hlc").attr("disabled", true);
  }
  $("#plus-pr-hlc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-hlc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-hlc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrón de referencia HLG
$('#plus-pr-hlg').click(function add() {
  var $qtde = $(".cant-pr-hlg");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-hlg").attr("disabled", true);
    };
      $("#minus-pr-hlg").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-hlg").attr("disabled", !$(".cant-pr-hlg").val());

$('#minus-pr-hlg').click(function minust() {
  var $qtde = $(".cant-pr-hlg");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-hlg").attr("disabled", true);
  }
  $("#plus-pr-hlg").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-hlg").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-hlg").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Vickers
$('#plus-pr-vcd').click(function add() {
  var $qtde = $(".cant-pr-vcd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-vcd").attr("disabled", true);
    };
      $("#minus-pr-vcd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-vcd").attr("disabled", !$(".cant-pr-vcd").val());

$('#minus-pr-vcd').click(function minust() {
  var $qtde = $(".cant-pr-vcd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-vcd").attr("disabled", true);
  }
  $("#plus-pr-vcd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-vcd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-vcd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Vickers HV10 marca YAMAMOTO con certificado
$('#plus-pr-vy10').click(function add() {
  var $qtde = $(".cant-pr-vy10");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-vy10").attr("disabled", true);
    };
      $("#minus-pr-vy10").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-vy10").attr("disabled", !$(".cant-pr-vy10").val());

$('#minus-pr-vy10').click(function minust() {
  var $qtde = $(".cant-pr-vy10");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-vy10").attr("disabled", true);
  }
  $("#plus-pr-vy10").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-vy10").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-vy10").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Rockwell C
$('#plus-pr-rccd').click(function add() {
  var $qtde = $(".cant-pr-rccd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-rccd").attr("disabled", true);
    };
      $("#minus-pr-rccd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-rccd").attr("disabled", !$(".cant-pr-rccd").val());

$('#minus-pr-rccd').click(function minust() {
  var $qtde = $(".cant-pr-rccd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-rccd").attr("disabled", true);
  }
  $("#plus-pr-rccd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-rccd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-rccd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Rockwell C marca YAMAMOTO con certificado
$('#plus-pr-rcy').click(function add() {
  var $qtde = $(".cant-pr-rcy");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-rcy").attr("disabled", true);
    };
      $("#minus-pr-rcy").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-rcy").attr("disabled", !$(".cant-pr-rcy").val());

$('#minus-pr-rcy').click(function minust() {
  var $qtde = $(".cant-pr-rcy");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-rcy").attr("disabled", true);
  }
  $("#plus-pr-rcy").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-rcy").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-rcy").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Rockwell B
$('#plus-pr-rbcd').click(function add() {
  var $qtde = $(".cant-pr-rbcd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-rbcd").attr("disabled", true);
    };
      $("#minus-pr-rbcd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-rbcd").attr("disabled", !$(".cant-pr-rbcd").val());

$('#minus-pr-rbcd').click(function minust() {
  var $qtde = $(".cant-pr-rbcd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-rbcd").attr("disabled", true);
  }
  $("#plus-pr-rbcd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-rbcd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-rbcd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Rockwell B marca YAMAMOTO con certificado
$('#plus-pr-rby').click(function add() {
  var $qtde = $(".cant-pr-rby");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-rby").attr("disabled", true);
    };
      $("#minus-pr-rby").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-rby").attr("disabled", !$(".cant-pr-rby").val());

$('#minus-pr-rby').click(function minust() {
  var $qtde = $(".cant-pr-rby");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-rby").attr("disabled", true);
  }
  $("#plus-pr-rby").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-rby").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-rby").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Brinell
$('#plus-pr-brcd').click(function add() {
  var $qtde = $(".cant-pr-brcd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-brcd").attr("disabled", true);
    };
      $("#minus-pr-brcd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-brcd").attr("disabled", !$(".cant-pr-brcd").val());

$('#minus-pr-brcd').click(function minust() {
  var $qtde = $(".cant-pr-brcd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-brcd").attr("disabled", true);
  }
  $("#plus-pr-brcd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-brcd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-brcd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Patrones Brinell marca YAMAMOTO con certificado
$('#plus-pr-bry').click(function add() {
  var $qtde = $(".cant-pr-bry");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-bry").attr("disabled", true);
    };
      $("#minus-pr-bry").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-bry").attr("disabled", !$(".cant-pr-bry").val());

$('#minus-pr-bry').click(function minust() {
  var $qtde = $(".cant-pr-bry");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-bry").attr("disabled", true);
  }
  $("#plus-pr-bry").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-bry").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-bry").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificación patron Leeb HLD con trazabilidad INTI
$('#plus-pr-clhld').click(function add() {
  var $qtde = $(".cant-pr-clhld");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-clhld").attr("disabled", true);
    };
      $("#minus-pr-clhld").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-clhld").attr("disabled", !$(".cant-pr-clhld").val());

$('#minus-pr-clhld').click(function minust() {
  var $qtde = $(".cant-pr-clhld");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-clhld").attr("disabled", true);
  }
  $("#plus-pr-clhld").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-clhld").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-clhld").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificacion patron Vickers HV10 con trazabilidad INTI
$('#plus-pr-chv10').click(function add() {
  var $qtde = $(".cant-pr-chv10");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pr-chv10").attr("disabled", true);
    };
      $("#minus-pr-chv10").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pr-chv10").attr("disabled", !$(".cant-pr-chv10").val());

$('#minus-pr-chv10').click(function minust() {
  var $qtde = $(".cant-pr-chv10");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pr-chv10").attr("disabled", true);
  }
  $("#plus-pr-chv10").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pr-chv10").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pr-chv10").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});



//----- Funda protectora de silicona color Rojo
$('#plus-fro').click(function add() {
  var $qtde = $(".cant-fro");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-fro").attr("disabled", true);
    };
      $("#minus-fro").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-fro").attr("disabled", !$(".cant-fro").val());

$('#minus-fro').click(function minust() {
  var $qtde = $(".cant-fro");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-fro").attr("disabled", true);
  }
  $("#plus-fro").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-fro").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-fro").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cable con conector para dispositivos de impacto dmq
$('#plus-cdi').click(function add() {
  var $qtde = $(".cant-cdi");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cdi").attr("disabled", true);
    };
      $("#minus-cdi").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cdi").attr("disabled", !$(".cant-cdi").val());

$('#minus-cdi').click(function minust() {
  var $qtde = $(".cant-cdi");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cdi").attr("disabled", true);
  }
  $("#plus-cdi").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cdi").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cdi").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});



//----- Cable con conector para sondas UCI dmq
$('#plus-cdiuci').click(function add() {
    var $qtde = $(".cant-cdiuci");
    var a = $qtde.val();
    if (a <= 8) {
        a++;
        $qtde.val(a);
      } else {
        $("#plus-cdiuci").attr("disabled", true);
      };
        $("#minus-cdiuci").attr("disabled", !a);
        $qtde.val(a);
  });
  $("#minus-cdiuci").attr("disabled", !$(".cant-cdiuci").val());
  
  $('#minus-cdiuci').click(function minust() {
    var $qtde = $(".cant-cdiuci");
    var b = $qtde.val();
    if (b >= 2) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus-cdiuci").attr("disabled", true);
    }
    $("#plus-cdiuci").attr("disabled", !b);
    $qtde.val(b);
  });
  
  /* On change */
  $(document).ready(function() {
    function updatePrice() {
      var price = parseFloat($(".cant-cdiuci").val());
      var total = price;
      var total = total.toFixed(0);
      $("#total-cdiuci").val(total);
    }

    
// On the click of an input, update the price
    $(document).on("click", "input", updatePrice);
  });

//----- Cable para conexión de impresora térmica a equipos dmq
$('#plus-cimp').click(function add() {
    var $qtde = $(".cant-cimp");
    var a = $qtde.val();
    if (a <= 8) {
        a++;
        $qtde.val(a);
      } else {
        $("#plus-cimp").attr("disabled", true);
      };
        $("#minus-cimp").attr("disabled", !a);
        $qtde.val(a);
  });
  $("#minus-cimp").attr("disabled", !$(".cant-cimp").val());
  
  $('#minus-cimp').click(function minust() {
    var $qtde = $(".cant-cimp");
    var b = $qtde.val();
    if (b >= 2) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus-cimp").attr("disabled", true);
    }
    $("#plus-cimp").attr("disabled", !b);
    $qtde.val(b);
  });
  
  /* On change */
  $(document).ready(function() {
    function updatePrice() {
      var price = parseFloat($(".cant-cimp").val());
      var total = price;
      var total = total.toFixed(0);
      $("#total-cimp").val(total);
    }

    
// On the click of an input, update the price
    $(document).on("click", "input", updatePrice);
  });

//----- Impresora
$('#plus-imp').click(function add() {
    var $qtde = $(".cant-imp");
    var a = $qtde.val();
    if (a <= 8) {
        a++;
        $qtde.val(a);
      } else {
        $("#plus-imp").attr("disabled", true);
      };
        $("#minus-imp").attr("disabled", !a);
        $qtde.val(a);
  });
  $("#minus-imp").attr("disabled", !$(".cant-imp").val());
  
  $('#minus-imp').click(function minust() {
    var $qtde = $(".cant-imp");
    var b = $qtde.val();
    if (b >= 2) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus-imp").attr("disabled", true);
    }
    $("#plus-imp").attr("disabled", !b);
    $qtde.val(b);
  });
  
  /* On change */
  $(document).ready(function() {
    function updatePrice() {
      var price = parseFloat($(".cant-imp").val());
      var total = price;
      var total = total.toFixed(0);
      $("#total-imp").val(total);
    }

    
// On the click of an input, update the price
    $(document).on("click", "input", updatePrice);
  });


//--------------- Filtrar accessorios por modelo compatible

var sections = $('.filtro');
function updateContentVisibility(){
    var checked = $("#models-accordion :checkbox:checked");
    if(checked.length){
        sections.hide();
        checked.each(function(){
            $("." + $(this).val()).show();
        });
    } else {
        sections.show();
    }
}

$("#models-accordion :checkbox").click(updateContentVisibility);
updateContentVisibility();


//--------------- Mostrar / Ocultar botón cotizar

$(".custom-control-input").click(function() {
  $('.btn-enviar').toggle( $(".custom-control-input:checked").length > 0 );
});


//--------------- Mostrar / Ocultar texto cotizar

$(".custom-control-input").click(function() {
  $('.txt-cot').toggle( $(".custom-control-input:checked").length <= 0 );
});


//--------------- Mostrar / Ocultar titulo accesorios cotizar

$("#accesorios .acc-check").click(function() {
  $('.tt-acc').toggle( $("#accesorios .acc-check:checked").length > 0 );
});




//---------------Guiones entre cuil

function format(input, format, sep) {
  var output = "";
  var idx = 0;
  for (var i = 0; i < format.length && idx < input.length; i++) {
      output += input.substr(idx, format[i]);
      if (idx + format[i] < input.length) output += sep;
      idx += format[i];
  }

  output += input.substr(idx);

  return output;
}

$('.cuit').keyup(function() {
  var foo = $(this).val().replace(/-/g, ""); // remove hyphens
  // You may want to remove all non-digits here
  // var foo = $(this).val().replace(/\D/g, "");

  if (foo.length > 0) {
      foo = format(foo, [2, 8, 1], "-");
  }

  
  $(this).val(foo);
});