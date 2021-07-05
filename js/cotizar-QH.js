

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
  var $qtde = $(".cant-5dl");
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

//----- Disp. de impacto Tipo D
$('#plus-di-d').click(function add() {
  var $qtde = $(".cant-di-d");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-di-d").attr("disabled", true);
    };
      $("#minus-di-d").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-di-d").attr("disabled", !$(".cant-di-d").val());

$('#minus-di-d').click(function minust() {
  var $qtde = $(".cant-di-d");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-di-d").attr("disabled", true);
  }
  $("#plus-di-d").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-di-d").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-di-d").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Disp. de impacto Tipo DC
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

//----- Disp. de impacto Tipo C
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

//----- Disp. de impacto Tipo G
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

//----- Disp. de impacto Tipo DL
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


//----- Disp. de impacto Tipo D+15
$('#plus-d15').click(function add() {
  var $qtde = $(".cant-d15");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-d15").attr("disabled", true);
    };
      $("#minus-d15").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-d15").attr("disabled", !$(".cant-d15").val());

$('#minus-d15').click(function minust() {
  var $qtde = $(".cant-a350");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-d15").attr("disabled", true);
  }
  $("#plus-d15").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-d15").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-d15").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Bloque Patron HLD
$('#plus-bd-hld').click(function add() {
  var $qtde = $(".cant-bd-hld");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-bd-hld").attr("disabled", true);
    };
      $("#minus-bd-hld").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-bd-hld").attr("disabled", !$(".cant-bd-hld").val());

$('#minus-bd-hld').click(function minust() {
  var $qtde = $(".cant-bd-hld");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-bd-hld").attr("disabled", true);
  }
  $("#plus-bd-hld").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-bd-hld").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-bd-hld").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Bloque Patron HLG
$('#plus-bd-hlg').click(function add() {
  var $qtde = $(".cant-bd-hlg");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-bd-hlg").attr("disabled", true);
    };
      $("#minus-bd-hlg").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-bd-hlg").attr("disabled", !$(".cant-bd-hlg").val());

$('#minus-bd-hlg').click(function minust() {
  var $qtde = $(".cant-pa6");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-bd-hlg").attr("disabled", true);
  }
  $("#plus-bd-hlg").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-bd-hlg").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-bd-hlg").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Pasta de acoplamiento - 50g
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


//----- Pasta de acoplamiento - 200g
$('#plus-pa200').click(function add() {
  var $qtde = $(".cant-pa200");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa200").attr("disabled", true);
    };
      $("#minus-pa200").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa200").attr("disabled", !$(".cant-pa200").val());

$('#minus-pa200').click(function minust() {
  var $qtde = $(".cant-pa200");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa200").attr("disabled", true);
  }
  $("#plus-pa200").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa200").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa200").val(total);
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


//----- Cuerpo de impacto D
$('#plus-cid').click(function add() {
  var $qtde = $(".cant-cid");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cid").attr("disabled", true);
    };
      $("#minus-cid").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cid").attr("disabled", !$(".cant-cid").val());

$('#minus-cid').click(function minust() {
  var $qtde = $(".cant-cid");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cid").attr("disabled", true);
  }
  $("#plus-cid").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cid").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cid").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cuerpo de impacto G
$('#plus-cig').click(function add() {
  var $qtde = $(".cant-cig");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-cig").attr("disabled", true);
    };
      $("#minus-cig").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-cig").attr("disabled", !$(".cant-cig").val());

$('#minus-cig').click(function minust() {
  var $qtde = $(".cant-cig");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-cig").attr("disabled", true);
  }
  $("#plus-cig").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-cig").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-cig").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Maletín Compacto
$('#plus-mc').click(function add() {
  var $qtde = $(".cant-mc");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-mc").attr("disabled", true);
    };
      $("#minus-mc").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-mc").attr("disabled", !$(".cant-mc").val());

$('#minus-mc').click(function minust() {
  var $qtde = $(".cant-mc");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-mc").attr("disabled", true);
  }
  $("#plus-mc").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-mc").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-mc").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Maletín Grande
$('#plus-mg').click(function add() {
  var $qtde = $(".cant-mg");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-mg").attr("disabled", true);
    };
      $("#minus-mg").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-mg").attr("disabled", !$(".cant-mg").val());

$('#minus-mg').click(function minust() {
  var $qtde = $(".cant-mg");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-mg").attr("disabled", true);
  }
  $("#plus-mg").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-mg").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-mg").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Funda gris
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


//----- Funda roja
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


//----- Funda amarilla
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



//----- USB
$('#plus-usb').click(function add() {
    var $qtde = $(".cant-usb");
    var a = $qtde.val();
    if (a <= 8) {
        a++;
        $qtde.val(a);
      } else {
        $("#plus-usb").attr("disabled", true);
      };
        $("#minus-usb").attr("disabled", !a);
        $qtde.val(a);
  });
  $("#minus-usb").attr("disabled", !$(".cant-usb").val());
  
  $('#minus-usb').click(function minust() {
    var $qtde = $(".cant-usb");
    var b = $qtde.val();
    if (b >= 2) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus-usb").attr("disabled", true);
    }
    $("#plus-usb").attr("disabled", !b);
    $qtde.val(b);
  });
  
  /* On change */
  $(document).ready(function() {
    function updatePrice() {
      var price = parseFloat($(".cant-usb").val());
      var total = price;
      var total = total.toFixed(0);
      $("#total-usb").val(total);
    }

    
// On the click of an input, update the price
    $(document).on("click", "input", updatePrice);
  });

//----- RS232
$('#plus-rs').click(function add() {
    var $qtde = $(".cant-rs");
    var a = $qtde.val();
    if (a <= 8) {
        a++;
        $qtde.val(a);
      } else {
        $("#plus-rs").attr("disabled", true);
      };
        $("#minus-rs").attr("disabled", !a);
        $qtde.val(a);
  });
  $("#minus-rs").attr("disabled", !$(".cant-rs").val());
  
  $('#minus-rs').click(function minust() {
    var $qtde = $(".cant-rs");
    var b = $qtde.val();
    if (b >= 2) {
      b--;
      $qtde.val(b);
    } else {
      $("#minus-rs").attr("disabled", true);
    }
    $("#plus-rs").attr("disabled", !b);
    $qtde.val(b);
  });
  
  /* On change */
  $(document).ready(function() {
    function updatePrice() {
      var price = parseFloat($(".cant-rs").val());
      var total = price;
      var total = total.toFixed(0);
      $("#total-rs").val(total);
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

