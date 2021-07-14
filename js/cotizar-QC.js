

//-------- Elección modelo


//----- QC5 F
$('#plus-5f').click(function add() {
  var $qtde = $(".cant-5f");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5f").attr("disabled", true);
    };
      $("#minus-5f").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5f").attr("disabled", !$(".cant-5f").val());

$('#minus-5f').click(function minust() {
  var $qtde = $(".cant-5f");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5f").attr("disabled", true);
  }
  $("#plus-5f").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5f").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5f").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- QC5 N
$('#plus-5n').click(function add() {
  var $qtde = $(".cant-5n");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5n").attr("disabled", true);
    };
      $("#minus-5n").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5n").attr("disabled", !$(".cant-5n").val());

$('#minus-5n').click(function minust() {
  var $qtde = $(".cant-5n");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5n").attr("disabled", true);
  }
  $("#plus-5n").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5n").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5n").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC5 C
$('#plus-5c').click(function add() {
  var $qtde = $(".cant-5c");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5c").attr("disabled", true);
    };
      $("#minus-5c").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5c").attr("disabled", !$(".cant-5c").val());

$('#minus-5c').click(function minust() {
  var $qtde = $(".cant-5c");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5c").attr("disabled", true);
  }
  $("#plus-5c").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5c").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5c").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC5 DLF
$('#plus-5dlf').click(function add() {
  var $qtde = $(".cant-5dlf");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5dlf").attr("disabled", true);
    };
      $("#minus-5dlf").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5dlf").attr("disabled", !$(".cant-5dlf").val());

$('#minus-5dlf').click(function minust() {
  var $qtde = $(".cant-5dlf");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5dlf").attr("disabled", true);
  }
  $("#plus-5dlf").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5dlf").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5dlf").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC5 DLN
$('#plus-5dln').click(function add() {
  var $qtde = $(".cant-5dln");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5dln").attr("disabled", true);
    };
      $("#minus-5dln").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5dln").attr("disabled", !$(".cant-5dln").val());

$('#minus-5dln').click(function minust() {
  var $qtde = $(".cant-5dln");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5dln").attr("disabled", true);
  }
  $("#plus-5dln").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5dln").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5dln").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC5 DLC
$('#plus-5dlc').click(function add() {
  var $qtde = $(".cant-5dlc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5dlc").attr("disabled", true);
    };
      $("#minus-5dlc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5dlc").attr("disabled", !$(".cant-5dlc").val());

$('#minus-5dlc').click(function minust() {
  var $qtde = $(".cant-5dlc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5dlc").attr("disabled", true);
  }
  $("#plus-5dlc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5dlc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5dlc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//-----  QC3 F
$('#plus-3f').click(function add() {
  var $qtde = $(".cant-3f");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-3f").attr("disabled", true);
    };
      $("#minus-3f").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-3f").attr("disabled", !$(".cant-3f").val());

$('#minus-3f').click(function minust() {
  var $qtde = $(".cant-3f");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-3f").attr("disabled", true);
  }
  $("#plus-3f").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-3f").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-3f").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC3 N
$('#plus-3n').click(function add() {
  var $qtde = $(".cant-3n");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-3n").attr("disabled", true);
    };
      $("#minus-3n").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-3n").attr("disabled", !$(".cant-3n").val());

$('#minus-3n').click(function minust() {
  var $qtde = $(".cant-3n");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-3n").attr("disabled", true);
  }
  $("#plus-3n").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-3n").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-3n").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC3 DLF
$('#plus-3dlf').click(function add() {
  var $qtde = $(".cant-3dlf");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-3dlf").attr("disabled", true);
    };
      $("#minus-3dlf").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-3dlf").attr("disabled", !$(".cant-3dlf").val());

$('#minus-3dlf').click(function minust() {
  var $qtde = $(".cant-3dlf");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-3dlf").attr("disabled", true);
  }
  $("#plus-3dlf").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-3dlf").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-3dlf").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC3 DLN
$('#plus-3dln').click(function add() {
  var $qtde = $(".cant-3dln");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-3dln").attr("disabled", true);
    };
      $("#minus-3dln").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-3dln").attr("disabled", !$(".cant-3dln").val());

$('#minus-3dln').click(function minust() {
  var $qtde = $(".cant-3dln");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-3dln").attr("disabled", true);
  }
  $("#plus-3dln").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-3dln").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-3dln").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC2 F
$('#plus-2f').click(function add() {
  var $qtde = $(".cant-2f");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2f").attr("disabled", true);
    };
      $("#minus-2f").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2f").attr("disabled", !$(".cant-2f").val());

$('#minus-2f').click(function minust() {
  var $qtde = $(".cant-2f");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2f").attr("disabled", true);
  }
  $("#plus-2f").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2f").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2f").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QC2 DLF
$('#plus-2dlf').click(function add() {
  var $qtde = $(".cant-2dlf");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2dlf").attr("disabled", true);
    };
      $("#minus-2dlf").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2dlf").attr("disabled", !$(".cant-2dlf").val());

$('#minus-2dlf').click(function minust() {
  var $qtde = $(".cant-2dlf");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2dlf").attr("disabled", true);
  }
  $("#plus-2dlf").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2dlf").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2dlf").val(total);
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

//----- Sonda recta Ferrosa
$('#plus-srf').click(function add() {
  var $qtde = $(".cant-srf");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-srf").attr("disabled", true);
    };
      $("#minus-srf").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-srf").attr("disabled", !$(".cant-srf").val());

$('#minus-srf').click(function minust() {
  var $qtde = $(".cant-srf");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-srf").attr("disabled", true);
  }
  $("#plus-srf").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-srf").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-srf").val(total);
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


//----- Sonda recta Ferrosa con corte en "V"
$('#plus-srfv').click(function add() {
  var $qtde = $(".cant-srfv");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-srfv").attr("disabled", true);
    };
      $("#minus-srfv").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-srfv").attr("disabled", !$(".cant-srfv").val());

$('#minus-srfv').click(function minust() {
  var $qtde = $(".cant-srfv");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-srfv").attr("disabled", true);
  }
  $("#plus-srfv").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-srfv").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-srfv").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Sonda recta Ferrosa de Rango Extendido
$('#plus-srex').click(function add() {
  var $qtde = $(".cant-srex");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-srex").attr("disabled", true);
    };
      $("#minus-srex").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-srex").attr("disabled", !$(".cant-srex").val());

$('#minus-srex').click(function minust() {
  var $qtde = $(".cant-srex");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-srex").attr("disabled", true);
  }
  $("#plus-srex").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-srex").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-srex").val(total);
    $("#total-srex_").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Mini-Sonda recta Ferrosa
$('#plus-smr').click(function add() {
  var $qtde = $(".cant-smr");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-smr").attr("disabled", true);
    };
      $("#minus-smr").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-smr").attr("disabled", !$(".cant-smr").val());

$('#minus-smr').click(function minust() {
  var $qtde = $(".cant-smr");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-smr").attr("disabled", true);
  }
  $("#plus-smr").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-smr").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-smr").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Mini-Sonda Ferrosa a 90°
$('#plus-sm90').click(function add() {
  var $qtde = $(".cant-sm90");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-sm90").attr("disabled", true);
    };
      $("#minus-sm90").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-sm90").attr("disabled", !$(".cant-sm90").val());

$('#minus-sm90').click(function minust() {
  var $qtde = $(".cant-sm90");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-sm90").attr("disabled", true);
  }
  $("#plus-sm90").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-sm90").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-sm90").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Mini-Sonda Ferrosa a 45°
$('#plus-sm45').click(function add() {
  var $qtde = $(".cant-sm45");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-sm45").attr("disabled", true);
    };
      $("#minus-sm45").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-sm45").attr("disabled", !$(".cant-sm45").val());

$('#minus-sm45').click(function minust() {
  var $qtde = $(".cant-sm45");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-sm45").attr("disabled", true);
  }
  $("#plus-sm45").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-sm45").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-sm45").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Base Ferrosa para calibración
$('#plus-bfc').click(function add() {
  var $qtde = $(".cant-bfc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-bfc").attr("disabled", true);
    };
      $("#minus-bfc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-bfc").attr("disabled", !$(".cant-bfc").val());

$('#minus-bfc').click(function minust() {
  var $qtde = $(".cant-bfc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-bfc").attr("disabled", true);
  }
  $("#plus-bfc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-bfc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-bfc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Base No-Ferrosa para calibración
$('#plus-bnfc').click(function add() {
  var $qtde = $(".cant-bnfc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-bnfc").attr("disabled", true);
    };
      $("#minus-bnfc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-bnfc").attr("disabled", !$(".cant-bnfc").val());

$('#minus-bnfc').click(function minust() {
  var $qtde = $(".cant-bnfc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-bnfc").attr("disabled", true);
  }
  $("#plus-bnfc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-bnfc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-bnfc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Galga para calibración
$('#plus-gcal').click(function add() {
  var $qtde = $(".cant-gcal");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-gcal").attr("disabled", true);
    };
      $("#minus-gcal").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-gcal").attr("disabled", !$(".cant-gcal").val());

$('#minus-gcal').click(function minust() {
  var $qtde = $(".cant-gcal");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-gcal").attr("disabled", true);
  }
  $("#plus-gcal").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-gcal").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-gcal").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Juego de 3 Galgas
$('#plus-gcal3').click(function add() {
  var $qtde = $(".cant-gcal3");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-gcal3").attr("disabled", true);
    };
      $("#minus-gcal3").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-gcal3").attr("disabled", !$(".cant-gcal3").val());

$('#minus-gcal3').click(function minust() {
  var $qtde = $(".cant-gcal3");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-gcal3").attr("disabled", true);
  }
  $("#plus-gcal3").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-gcal3").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-gcal3").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Juego de 3 Galgas Extendido
$('#plus-gcal3ex').click(function add() {
  var $qtde = $(".cant-gcal3ex");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-gcal3ex").attr("disabled", true);
    };
      $("#minus-gcal3ex").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-gcal3ex").attr("disabled", !$(".cant-gcal3ex").val());

$('#minus-gcal3ex').click(function minust() {
  var $qtde = $(".cant-gcal3ex");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-gcal3ex").attr("disabled", true);
  }
  $("#plus-gcal3ex").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-gcal3ex").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-gcal3ex").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificación OAA para galgas individuales
$('#plus-ooagcal').click(function add() {
  var $qtde = $(".cant-ooagcal");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-ooagcal").attr("disabled", true);
    };
      $("#minus-ooagcal").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-ooagcal").attr("disabled", !$(".cant-ooagcal").val());

$('#minus-ooagcal').click(function minust() {
  var $qtde = $(".cant-ooagcal");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-ooagcal").attr("disabled", true);
  }
  $("#plus-ooagcal").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-ooagcal").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-ooagcal").val(total);
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



//----- Funda protectora de silicona color Gris
$('#plus-fgr').click(function add() {
  var $qtde = $(".cant-fgr");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-fgr").attr("disabled", true);
    };
      $("#minus-fgr").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-fgr").attr("disabled", !$(".cant-fgr").val());

$('#minus-fgr').click(function minust() {
  var $qtde = $(".cant-fgr");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-fgr").attr("disabled", true);
  }
  $("#plus-fgr").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-fgr").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-fgr").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});




//--------------- Copiar el valor de la sonda para agregar galgas

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