

//-------- Elección modelo


//----- QB7 B
$('#plus-7b').click(function add() {
  var $qtde = $(".cant-7b");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-7b").attr("disabled", true);
    };
      $("#minus-7b").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-7b").attr("disabled", !$(".cant-7b").val());

$('#minus-7b').click(function minust() {
  var $qtde = $(".cant-7b");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-7b").attr("disabled", true);
  }
  $("#plus-7b").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-7b").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-7b").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- QB7 E
$('#plus-7e').click(function add() {
  var $qtde = $(".cant-7e");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-7e").attr("disabled", true);
    };
      $("#minus-7e").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-7e").attr("disabled", !$(".cant-7e").val());

$('#minus-7e').click(function minust() {
  var $qtde = $(".cant-7e");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-7e").attr("disabled", true);
  }
  $("#plus-7e").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-7e").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-7e").val(total);
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

//----- Sonda Efecto Hall
$('#plus-seh').click(function add() {
  var $qtde = $(".cant-seh");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-seh").attr("disabled", true);
    };
      $("#minus-seh").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-seh").attr("disabled", !$(".cant-seh").val());

$('#minus-seh').click(function minust() {
  var $qtde = $(".cant-seh");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-seh").attr("disabled", true);
  }
  $("#plus-seh").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-seh").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-seh").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Sonda recta No-Ferrosa
$('#plus-srnf').click(function add() {
  var $qtde = $(".cant-srnf");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-srnf").attr("disabled", true);
    };
      $("#minus-srnf").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-srnf").attr("disabled", !$(".cant-srnf").val());

$('#minus-srnf').click(function minust() {
  var $qtde = $(".cant-srnf");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-srnf").attr("disabled", true);
  }
  $("#plus-srnf").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-srnf").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-srnf").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Sonda recta Combinada
$('#plus-src').click(function add() {
  var $qtde = $(".cant-src");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-src").attr("disabled", true);
    };
      $("#minus-src").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-src").attr("disabled", !$(".cant-src").val());

$('#minus-src').click(function minust() {
  var $qtde = $(".cant-src");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-src").attr("disabled", true);
  }
  $("#plus-src").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-src").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-src").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Punta de titanio estándar para sonda efecto hall
$('#plus-pte').click(function add() {
  var $qtde = $(".cant-pte");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pte").attr("disabled", true);
    };
      $("#minus-pte").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pte").attr("disabled", !$(".cant-pte").val());

$('#minus-pte').click(function minust() {
  var $qtde = $(".cant-pte");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pte").attr("disabled", true);
  }
  $("#plus-pte").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pte").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pte").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Punta de titanio angosta para sonda efecto hall
$('#plus-pta').click(function add() {
  var $qtde = $(".cant-pta");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pta").attr("disabled", true);
    };
      $("#minus-pta").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pta").attr("disabled", !$(".cant-pta").val());

$('#minus-pta').click(function minust() {
  var $qtde = $(".cant-pta");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pta").attr("disabled", true);
  }
  $("#plus-pta").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pta").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pta").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Punta de titanio con punta "cortafierro" para sonda efecto hall
$('#plus-ptc').click(function add() {
  var $qtde = $(".cant-ptc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ptc").attr("disabled", true);
    };
      $("#minus-ptc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ptc").attr("disabled", !$(".cant-ptc").val());

$('#minus-ptc').click(function minust() {
  var $qtde = $(".cant-ptc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ptc").attr("disabled", true);
  }
  $("#plus-ptc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ptc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ptc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Capuchón roscado que sostiene la punta de titanio estándar
$('#plus-cre').click(function add() {
  var $qtde = $(".cant-cre");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cre").attr("disabled", true);
    };
      $("#minus-cre").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cre").attr("disabled", !$(".cant-cre").val());

$('#minus-cre').click(function minust() {
  var $qtde = $(".cant-cre");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cre").attr("disabled", true);
  }
  $("#plus-cre").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cre").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cre").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Capuchón roscado que sostiene la punta de titanio angosta
$('#plus-cra').click(function add() {
  var $qtde = $(".cant-cra");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cra").attr("disabled", true);
    };
      $("#minus-cra").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cra").attr("disabled", !$(".cant-cra").val());

$('#minus-cra').click(function minust() {
  var $qtde = $(".cant-cra");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cra").attr("disabled", true);
  }
  $("#plus-cra").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cra").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cra").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cable de conexión con conectores Lemo para sonda efecto hall
$('#plus-cas').click(function add() {
  var $qtde = $(".cant-cas");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cas").attr("disabled", true);
    };
      $("#minus-cas").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cas").attr("disabled", !$(".cant-cas").val());

$('#minus-cas').click(function minust() {
  var $qtde = $(".cant-cas");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cas").attr("disabled", true);
  }
  $("#plus-cas").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cas").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cas").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Soporte de 2 piezas para sonda efecto hall
$('#plus-sop').click(function add() {
  var $qtde = $(".cant-sop");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-sop").attr("disabled", true);
    };
      $("#minus-sop").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-sop").attr("disabled", !$(".cant-sop").val());

$('#minus-sop').click(function minust() {
  var $qtde = $(".cant-sop");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-sop").attr("disabled", true);
  }
  $("#plus-sop").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-sop").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-sop").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Kit para QB7 B
$('#plus-kcalb').click(function add() {
  var $qtde = $(".cant-kcalb");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-kcalb").attr("disabled", true);
    };
      $("#minus-kcalb").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-kcalb").attr("disabled", !$(".cant-kcalb").val());

$('#minus-kcalb').click(function minust() {
  var $qtde = $(".cant-kcalb");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-kcalb").attr("disabled", true);
  }
  $("#plus-kcalb").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-kcalb").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-kcalb").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Kit para QB7 E
$('#plus-kcale').click(function add() {
  var $qtde = $(".cant-kcale");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-kcale").attr("disabled", true);
    };
      $("#minus-kcale").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-kcale").attr("disabled", !$(".cant-kcale").val());

$('#minus-kcale').click(function minust() {
  var $qtde = $(".cant-kcale");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-kcale").attr("disabled", true);
  }
  $("#plus-kcale").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-kcale").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-kcale").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Kit de calibración para cambio a modelo E
$('#plus-kcalms').click(function add() {
  var $qtde = $(".cant-kcalms");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-kcalms").attr("disabled", true);
    };
      $("#minus-kcalms").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-kcalms").attr("disabled", !$(".cant-kcalms").val());

$('#minus-kcalms').click(function minust() {
  var $qtde = $(".cant-kcalms");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-kcalms").attr("disabled", true);
  }
  $("#plus-kcalms").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-kcalms").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-kcalms").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Kit de bolillas de Acero
$('#plus-kcalba').click(function add() {
  var $qtde = $(".cant-kcalba");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-kcalba").attr("disabled", true);
    };
      $("#minus-kcalba").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-kcalba").attr("disabled", !$(".cant-kcalba").val());

$('#minus-kcalba').click(function minust() {
  var $qtde = $(".cant-kcalba");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-kcalba").attr("disabled", true);
  }
  $("#plus-kcalba").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-kcalba").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-kcalba").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Kit de bolillas Magnéticas
$('#plus-kcalbm').click(function add() {
  var $qtde = $(".cant-kcalbm");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-kcalbm").attr("disabled", true);
    };
      $("#minus-kcalbm").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-kcalbm").attr("disabled", !$(".cant-kcalbm").val());

$('#minus-kcalbm').click(function minust() {
  var $qtde = $(".cant-kcalbm");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-kcalbm").attr("disabled", true);
  }
  $("#plus-kcalbm").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-kcalbm").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-kcalbm").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Bolillas de acero de 1.59mm o 1/16" (100 pz)
$('#plus-ba159').click(function add() {
  var $qtde = $(".cant-ba159");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ba159").attr("disabled", true);
    };
      $("#minus-ba159").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ba159").attr("disabled", !$(".cant-ba159").val());

$('#minus-ba159').click(function minust() {
  var $qtde = $(".cant-ba159");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ba159").attr("disabled", true);
  }
  $("#plus-ba159").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ba159").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ba159").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Bolilla de acero de 3.18mm or 1/8" (100 pz)
$('#plus-ba318').click(function add() {
  var $qtde = $(".cant-ba318");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ba318").attr("disabled", true);
    };
      $("#minus-ba318").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ba318").attr("disabled", !$(".cant-ba318").val());

$('#minus-ba318').click(function minust() {
  var $qtde = $(".cant-ba318");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ba318").attr("disabled", true);
  }
  $("#plus-ba318").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ba318").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ba318").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Bolilla de acero de 4.76mm o 3/16" (40 pz)
$('#plus-ba476').click(function add() {
  var $qtde = $(".cant-ba476");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ba476").attr("disabled", true);
    };
      $("#minus-ba476").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ba476").attr("disabled", !$(".cant-ba476").val());

$('#minus-ba476').click(function minust() {
  var $qtde = $(".cant-ba476");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ba476").attr("disabled", true);
  }
  $("#plus-ba476").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ba476").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ba476").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Bolilla de acero de 6.35mm o 1/4" (20 pz)
$('#plus-ba635').click(function add() {
  var $qtde = $(".cant-ba635");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ba635").attr("disabled", true);
    };
      $("#minus-ba635").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ba635").attr("disabled", !$(".cant-ba635").val());

$('#minus-ba635').click(function minust() {
  var $qtde = $(".cant-ba635");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ba635").attr("disabled", true);
  }
  $("#plus-ba635").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ba635").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ba635").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Bolilla magnética de 4.76mm o 3/16" (40 pz)
$('#plus-bm476').click(function add() {
  var $qtde = $(".cant-bm476");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-bm476").attr("disabled", true);
    };
      $("#minus-bm476").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-bm476").attr("disabled", !$(".cant-bm476").val());

$('#minus-bm476').click(function minust() {
  var $qtde = $(".cant-bm476");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-bm476").attr("disabled", true);
  }
  $("#plus-bm476").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-bm476").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-bm476").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Bolilla magnética de 6.35mm o 1/4" (20 pz)
$('#plus-bm635').click(function add() {
  var $qtde = $(".cant-bm635");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-bm635").attr("disabled", true);
    };
      $("#minus-bm635").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-bm635").attr("disabled", !$(".cant-bm635").val());

$('#minus-bm635').click(function minust() {
  var $qtde = $(".cant-bm635");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-bm635").attr("disabled", true);
  }
  $("#plus-bm635").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-bm635").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-bm635").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador "cero" para bolilla de 1.59mm o 1/16"
$('#plus-ca0159').click(function add() {
  var $qtde = $(".cant-ca0159");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ca0159").attr("disabled", true);
    };
      $("#minus-ca0159").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ca0159").attr("disabled", !$(".cant-ca0159").val());

$('#minus-ca0159').click(function minust() {
  var $qtde = $(".cant-ca0159");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ca0159").attr("disabled", true);
  }
  $("#plus-ca0159").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ca0159").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ca0159").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador "cero" para bolilla de 3.18mm o 1/8"
$('#plus-ca0318').click(function add() {
  var $qtde = $(".cant-ca0318");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ca0318").attr("disabled", true);
    };
      $("#minus-ca0318").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ca0318").attr("disabled", !$(".cant-ca0318").val());

$('#minus-ca0318').click(function minust() {
  var $qtde = $(".cant-ca0318");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ca0318").attr("disabled", true);
  }
  $("#plus-ca0318").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ca0318").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ca0318").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador "cero" para bolilla de 4.76mm o 3/16"
$('#plus-ca0476').click(function add() {
  var $qtde = $(".cant-ca0476");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ca0476").attr("disabled", true);
    };
      $("#minus-ca0476").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ca0476").attr("disabled", !$(".cant-ca0476").val());

$('#minus-ca0476').click(function minust() {
  var $qtde = $(".cant-ca0476");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ca0476").attr("disabled", true);
  }
  $("#plus-ca0476").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ca0476").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ca0476").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con galga patrón de 0.25mm o 0.009"
$('#plus-cag25').click(function add() {
  var $qtde = $(".cant-cag25");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cag25").attr("disabled", true);
    };
      $("#minus-cag25").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cag25").attr("disabled", !$(".cant-cag25").val());

$('#minus-cag25').click(function minust() {
  var $qtde = $(".cant-cag25");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cag25").attr("disabled", true);
  }
  $("#plus-cag25").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cag25").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cag25").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con galga patrón de 0.5mm o 0.019"
$('#plus-cag5').click(function add() {
  var $qtde = $(".cant-cag5");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cag5").attr("disabled", true);
    };
      $("#minus-cag5").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cag5").attr("disabled", !$(".cant-cag5").val());

$('#minus-cag5').click(function minust() {
  var $qtde = $(".cant-cag5");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cag5").attr("disabled", true);
  }
  $("#plus-cag5").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cag5").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cag5").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 1mm o 0.039"
$('#plus-cab1').click(function add() {
  var $qtde = $(".cant-cab1");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab1").attr("disabled", true);
    };
      $("#minus-cab1").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab1").attr("disabled", !$(".cant-cab1").val());

$('#minus-cab1').click(function minust() {
  var $qtde = $(".cant-cab1");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab1").attr("disabled", true);
  }
  $("#plus-cab1").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab1").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab1").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 2mm o 0.078"
$('#plus-cab2').click(function add() {
  var $qtde = $(".cant-cab2");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab2").attr("disabled", true);
    };
      $("#minus-cab2").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab2").attr("disabled", !$(".cant-cab2").val());

$('#minus-cab2').click(function minust() {
  var $qtde = $(".cant-cab2");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab2").attr("disabled", true);
  }
  $("#plus-cab2").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab2").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab2").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 4mm o 0.157"
$('#plus-cab4').click(function add() {
  var $qtde = $(".cant-cab4");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab4").attr("disabled", true);
    };
      $("#minus-cab4").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab4").attr("disabled", !$(".cant-cab4").val());

$('#minus-cab4').click(function minust() {
  var $qtde = $(".cant-cab4");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab4").attr("disabled", true);
  }
  $("#plus-cab4").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab4").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab4").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 6mm o 0.236"
$('#plus-cab6').click(function add() {
  var $qtde = $(".cant-cab6");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab6").attr("disabled", true);
    };
      $("#minus-cab6").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab6").attr("disabled", !$(".cant-cab6").val());

$('#minus-cab6').click(function minust() {
  var $qtde = $(".cant-cab6");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab6").attr("disabled", true);
  }
  $("#plus-cab6").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab6").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab6").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 8mm o 0.314"
$('#plus-cab8').click(function add() {
  var $qtde = $(".cant-cab8");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab8").attr("disabled", true);
    };
      $("#minus-cab8").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab8").attr("disabled", !$(".cant-cab8").val());

$('#minus-cab8').click(function minust() {
  var $qtde = $(".cant-cab8");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab8").attr("disabled", true);
  }
  $("#plus-cab8").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab8").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab8").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 10mm o 0.393"
$('#plus-cab10').click(function add() {
  var $qtde = $(".cant-cab10");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab10").attr("disabled", true);
    };
      $("#minus-cab10").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab10").attr("disabled", !$(".cant-cab10").val());

$('#minus-cab10').click(function minust() {
  var $qtde = $(".cant-cab10");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab10").attr("disabled", true);
  }
  $("#plus-cab10").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab10").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab10").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 14mm o 0.551"
$('#plus-cab14').click(function add() {
  var $qtde = $(".cant-cab14");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab14").attr("disabled", true);
    };
      $("#minus-cab14").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab14").attr("disabled", !$(".cant-cab14").val());

$('#minus-cab14').click(function minust() {
  var $qtde = $(".cant-cab14");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab14").attr("disabled", true);
  }
  $("#plus-cab14").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab14").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab14").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 18mm o 0.708"
$('#plus-cab18').click(function add() {
  var $qtde = $(".cant-cab18");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab18").attr("disabled", true);
    };
      $("#minus-cab18").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab18").attr("disabled", !$(".cant-cab18").val());

$('#minus-cab18').click(function minust() {
  var $qtde = $(".cant-cab18");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab18").attr("disabled", true);
  }
  $("#plus-cab18").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab18").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab18").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibrador con bloque patrón cerámico de 22mm o 0.866"
$('#plus-cab22').click(function add() {
  var $qtde = $(".cant-cab22");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cab22").attr("disabled", true);
    };
      $("#minus-cab22").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cab22").attr("disabled", !$(".cant-cab22").val());

$('#minus-cab22').click(function minust() {
  var $qtde = $(".cant-cab22");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cab22").attr("disabled", true);
  }
  $("#plus-cab22").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cab22").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cab22").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Pedal con cable y conector Lemo
$('#plus-pd').click(function add() {
  var $qtde = $(".cant-pd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pd").attr("disabled", true);
    };
      $("#minus-pd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pd").attr("disabled", !$(".cant-pd").val());

$('#minus-pd').click(function minust() {
  var $qtde = $(".cant-pd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pd").attr("disabled", true);
  }
  $("#plus-pd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cable para pedal con conector Lemo
$('#plus-cpd').click(function add() {
  var $qtde = $(".cant-cpd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cpd").attr("disabled", true);
    };
      $("#minus-cpd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cpd").attr("disabled", !$(".cant-cpd").val());

$('#minus-cpd').click(function minust() {
  var $qtde = $(".cant-cpd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cpd").attr("disabled", true);
  }
  $("#plus-cpd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cpd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cpd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cable RS232 de 1,5m
$('#plus-crs232').click(function add() {
  var $qtde = $(".cant-crs232");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-crs232").attr("disabled", true);
    };
      $("#minus-crs232").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-crs232").attr("disabled", !$(".cant-crs232").val());

$('#minus-crs232').click(function minust() {
  var $qtde = $(".cant-crs232");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-crs232").attr("disabled", true);
  }
  $("#plus-crs232").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-crs232").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-crs232").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificado de conformidad de fábrica 
$('#plus-ccq').click(function add() {
  var $qtde = $(".cant-ccq");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ccq").attr("disabled", true);
    };
      $("#minus-ccq").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ccq").attr("disabled", !$(".cant-ccq").val());

$('#minus-ccq').click(function minust() {
  var $qtde = $(".cant-ccq");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ccq").attr("disabled", true);
  }
  $("#plus-ccq").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ccq").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ccq").val(total);
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