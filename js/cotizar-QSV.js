

//-------- Elección modelo


//----- QSV B
$('#plus-vb').click(function add() {
  var $qtde = $(".cant-vb");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-vb").attr("disabled", true);
    };
      $("#minus-vb").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-vb").attr("disabled", !$(".cant-vb").val());

$('#minus-vb').click(function minust() {
  var $qtde = $(".cant-vb");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-vb").attr("disabled", true);
  }
  $("#plus-vb").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-vb").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-vb").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- QSV DL
$('#plus-vdl').click(function add() {
  var $qtde = $(".cant-vdl");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-vdl").attr("disabled", true);
    };
      $("#minus-vdl").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-vdl").attr("disabled", !$(".cant-vdl").val());

$('#minus-vdl').click(function minust() {
  var $qtde = $(".cant-vdl");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-vdl").attr("disabled", true);
  }
  $("#plus-vdl").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-vdl").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-vdl").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QSV DCI
$('#plus-vdci').click(function add() {
  var $qtde = $(".cant-vdci");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-vdci").attr("disabled", true);
    };
      $("#minus-vdci").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-vdci").attr("disabled", !$(".cant-vdci").val());

$('#minus-vdci').click(function minust() {
  var $qtde = $(".cant-vdci");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-vdci").attr("disabled", true);
  }
  $("#plus-vdci").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-vdci").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-vdci").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QSV DCM
$('#plus-vdcm').click(function add() {
  var $qtde = $(".cant-vdcm");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-vdcm").attr("disabled", true);
    };
      $("#minus-vdcm").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-vdcm").attr("disabled", !$(".cant-vdcm").val());

$('#minus-vdcm').click(function minust() {
  var $qtde = $(".cant-vdcm");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-vdcm").attr("disabled", true);
  }
  $("#plus-vdcm").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-vdcm").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-vdcm").val(total);
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

//----- Transductor de 2MHz Ø12mm. 90°
$('#plus-t2m12').click(function add() {
  var $qtde = $(".cant-t2m12");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-t2m12").attr("disabled", true);
    };
      $("#minus-t2m12").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-t2m12").attr("disabled", !$(".cant-t2m12").val());

$('#minus-t2m12').click(function minust() {
  var $qtde = $(".cant-t2m12");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-t2m12").attr("disabled", true);
  }
  $("#plus-t2m12").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-t2m12").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-t2m12").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Transductor de 2MHz Ø22mm. 90°
$('#plus-t2m22').click(function add() {
  var $qtde = $(".cant-t2m22");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-t2m22").attr("disabled", true);
    };
      $("#minus-t2m22").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-t2m22").attr("disabled", !$(".cant-t2m22").val());

$('#minus-t2m22').click(function minust() {
  var $qtde = $(".cant-t2m22");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-t2m22").attr("disabled", true);
  }
  $("#plus-t2m22").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-t2m22").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-t2m22").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Transductor de 5MHz Ø10mm. 90°
$('#plus-t5m90').click(function add() {
  var $qtde = $(".cant-t5m90");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-t5m90").attr("disabled", true);
    };
      $("#minus-t5m90").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-t5m90").attr("disabled", !$(".cant-t5m90").val());

$('#minus-t5m90').click(function minust() {
  var $qtde = $(".cant-t5m90");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-t5m90").attr("disabled", true);
  }
  $("#plus-t5m90").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-t5m90").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-t5m90").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibre Insize
$('#plus-cali').click(function add() {
  var $qtde = $(".cant-cali");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cali").attr("disabled", true);
    };
      $("#minus-cali").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cali").attr("disabled", !$(".cant-cali").val());

$('#minus-cali').click(function minust() {
  var $qtde = $(".cant-cali");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cali").attr("disabled", true);
  }
  $("#plus-cali").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cali").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cali").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Calibre Mitutoyo
$('#plus-calm').click(function add() {
  var $qtde = $(".cant-calm");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-calm").attr("disabled", true);
    };
      $("#minus-calm").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-calm").attr("disabled", !$(".cant-calm").val());

$('#minus-calm').click(function minust() {
  var $qtde = $(".cant-calm");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-calm").attr("disabled", true);
  }
  $("#plus-calm").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-calm").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-calm").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Botella plástica con pico vertedor de 50cc
$('#plus-g50').click(function add() {
  var $qtde = $(".cant-g50");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-g50").attr("disabled", true);
    };
      $("#minus-g50").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-g50").attr("disabled", !$(".cant-g50").val());

$('#minus-g50').click(function minust() {
  var $qtde = $(".cant-g50");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-g50").attr("disabled", true);
  }
  $("#plus-g50").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-g50").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-g50").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Botella plástica con pico vertedor de 100cc
$('#plus-g100').click(function add() {
  var $qtde = $(".cant-g100");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-g100").attr("disabled", true);
    };
      $("#minus-g100").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-g100").attr("disabled", !$(".cant-g100").val());

$('#minus-g100').click(function minust() {
  var $qtde = $(".cant-g100");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-g100").attr("disabled", true);
  }
  $("#plus-g100").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-g100").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-g100").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificado de calibración QS2, QS3, QS5 B, QS5 DL
$('#plus-oaa1').click(function add() {
  var $qtde = $(".cant-oaa1");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-oaa1").attr("disabled", true);
    };
      $("#minus-oaa1").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-oaa1").attr("disabled", !$(".cant-oaa1").val());

$('#minus-oaa1').click(function minust() {
  var $qtde = $(".cant-oaa1");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-oaa1").attr("disabled", true);
  }
  $("#plus-oaa1").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-oaa1").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-oaa1").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificado de conformidad
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


//----- Patrón escalonado de 5 pasos en acero al carbono
$('#plus-pa5').click(function add() {
  var $qtde = $(".cant-pa5");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa5").attr("disabled", true);
    };
      $("#minus-pa5").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa5").attr("disabled", !$(".cant-pa5").val());

$('#minus-pa5').click(function minust() {
  var $qtde = $(".cant-pa5");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa5").attr("disabled", true);
  }
  $("#plus-pa5").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa5").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa5").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Patrón escalonado de 10 pasos en acero al carbono
$('#plus-pa10').click(function add() {
  var $qtde = $(".cant-pa10");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa10").attr("disabled", true);
    };
      $("#minus-pa10").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa10").attr("disabled", !$(".cant-pa10").val());

$('#minus-pa10').click(function minust() {
  var $qtde = $(".cant-pa10");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa10").attr("disabled", true);
  }
  $("#plus-pa10").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa10").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa10").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Certificacion OAA para patrón escalonado de 5 pasos
$('#plus-pa5oaa').click(function add() {
  var $qtde = $(".cant-pa5oaa");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa5oaa").attr("disabled", true);
    };
      $("#minus-pa5oaa").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa5oaa").attr("disabled", !$(".cant-pa5oaa").val());

$('#minus-pa5oaa').click(function minust() {
  var $qtde = $(".cant-pa5oaa");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa5oaa").attr("disabled", true);
  }
  $("#plus-pa5oaa").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa5oaa").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa5oaa").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Certificacion OAA para patrón escalonado de 10 pasos
$('#plus-pa10oaa').click(function add() {
  var $qtde = $(".cant-pa10oaa");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa10oaa").attr("disabled", true);
    };
      $("#minus-pa10oaa").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa10oaa").attr("disabled", !$(".cant-pa10oaa").val());

$('#minus-pa10oaa').click(function minust() {
  var $qtde = $(".cant-pa10oaa");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa10oaa").attr("disabled", true);
  }
  $("#plus-pa10oaa").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa10oaa").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa10oaa").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Funda protectora de silicona amarilla
$('#plus-fam').click(function add() {
  var $qtde = $(".cant-fam");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-fam").attr("disabled", true);
    };
      $("#minus-fam").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-fam").attr("disabled", !$(".cant-fam").val());

$('#minus-fam').click(function minust() {
  var $qtde = $(".cant-fam");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-fam").attr("disabled", true);
  }
  $("#plus-fam").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-fam").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-fam").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cable de interfaz para QSV-DLI a calibre digital Insize.
$('#plus-cis').click(function add() {
  var $qtde = $(".cant-cis");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cis").attr("disabled", true);
    };
      $("#minus-cis").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cis").attr("disabled", !$(".cant-cis").val());

$('#minus-cis').click(function minust() {
  var $qtde = $(".cant-cis");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cis").attr("disabled", true);
  }
  $("#plus-cis").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cis").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cis").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});



//----- Cable de interfaz para QSV-DLM a calibre digital Mitutoyo.
$('#plus-cim').click(function add() {
  var $qtde = $(".cant-cim");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cim").attr("disabled", true);
    };
      $("#minus-cim").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cim").attr("disabled", !$(".cant-cim").val());

$('#minus-cim').click(function minust() {
  var $qtde = $(".cant-cim");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cim").attr("disabled", true);
  }
  $("#plus-cim").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cim").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cim").val(total);
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