

//-------- Elección modelo


//----- QS5 B
$('#plus-5b').click(function add() {
  var $qtde = $(".cant-5b");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5b").attr("disabled", true);
    };
      $("#minus-5b").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5b").attr("disabled", !$(".cant-5b").val());

$('#minus-5b').click(function minust() {
  var $qtde = $(".cant-5b");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5b").attr("disabled", true);
  }
  $("#plus-5b").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5b").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5b").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- QS5 E
$('#plus-5e').click(function add() {
  var $qtde = $(".cant-5e");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5e").attr("disabled", true);
    };
      $("#minus-5e").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5e").attr("disabled", !$(".cant-5e").val());

$('#minus-5e').click(function minust() {
  var $qtde = $(".cant-5e");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5e").attr("disabled", true);
  }
  $("#plus-5e").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5e").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5e").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS5 DL
$('#plus-5dl').click(function add() {
  var $qtde = $(".cant-5dl");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5dl").attr("disabled", true);
    };
      $("#minus-5dl").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5dl").attr("disabled", !$(".cant-5dl").val());

$('#minus-5dl').click(function minust() {
  var $qtde = $(".cant-5dl");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5dl").attr("disabled", true);
  }
  $("#plus-5dl").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5dl").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5dl").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS5 DLE
$('#plus-5dle').click(function add() {
  var $qtde = $(".cant-5dle");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-5dle").attr("disabled", true);
    };
      $("#minus-5dle").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-5dle").attr("disabled", !$(".cant-5dle").val());

$('#minus-5dle').click(function minust() {
  var $qtde = $(".cant-5dle");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-5dle").attr("disabled", true);
  }
  $("#plus-5dle").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-5dle").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-5dle").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS3 B
$('#plus-3b').click(function add() {
  var $qtde = $(".cant-3b");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-3b").attr("disabled", true);
    };
      $("#minus-3b").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-3b").attr("disabled", !$(".cant-3b").val());

$('#minus-3b').click(function minust() {
  var $qtde = $(".cant-3b");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-3b").attr("disabled", true);
  }
  $("#plus-3b").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-3b").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-3b").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS3 DL
$('#plus-3dl').click(function add() {
  var $qtde = $(".cant-3dl");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-3dl").attr("disabled", true);
    };
      $("#minus-3dl").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-3dl").attr("disabled", !$(".cant-3dl").val());

$('#minus-3dl').click(function minust() {
  var $qtde = $(".cant-3dl");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-3dl").attr("disabled", true);
  }
  $("#plus-3dl").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-3dl").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-3dl").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS2 S
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


//----- QS2 V
$('#plus-2v').click(function add() {
  var $qtde = $(".cant-2v");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2v").attr("disabled", true);
    };
      $("#minus-2v").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2v").attr("disabled", !$(".cant-2v").val());

$('#minus-2v').click(function minust() {
  var $qtde = $(".cant-2v");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2v").attr("disabled", true);
  }
  $("#plus-2v").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2v").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2v").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS2 DL
$('#plus-2dl').click(function add() {
  var $qtde = $(".cant-2dl");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2dl").attr("disabled", true);
    };
      $("#minus-2dl").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2dl").attr("disabled", !$(".cant-2dl").val());

$('#minus-2dl').click(function minust() {
  var $qtde = $(".cant-2dl");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2dl").attr("disabled", true);
  }
  $("#plus-2dl").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2dl").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2dl").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- QS2 DLV
$('#plus-2dlv').click(function add() {
  var $qtde = $(".cant-2dlv");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-2dlv").attr("disabled", true);
    };
      $("#minus-2dlv").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-2dlv").attr("disabled", !$(".cant-2dlv").val());

$('#minus-2dlv').click(function minust() {
  var $qtde = $(".cant-2dlv");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-2dlv").attr("disabled", true);
  }
  $("#plus-2dlv").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-2dlv").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-2dlv").val(total);
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


//----- Transductor de 5MHz Ø10mm. Recto
$('#plus-t5mr').click(function add() {
  var $qtde = $(".cant-t5mr");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-t5mr").attr("disabled", true);
    };
      $("#minus-t5mr").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-t5mr").attr("disabled", !$(".cant-t5mr").val());

$('#minus-t5mr').click(function minust() {
  var $qtde = $(".cant-t5mr");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-t5mr").attr("disabled", true);
  }
  $("#plus-t5mr").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-t5mr").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-t5mr").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Transductor 7HHz
$('#plus-t7m').click(function add() {
  var $qtde = $(".cant-t7m");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-t7m").attr("disabled", true);
    };
      $("#minus-t7m").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-t7m").attr("disabled", !$(".cant-t7m").val());

$('#minus-t7m').click(function minust() {
  var $qtde = $(".cant-t7m");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-t7m").attr("disabled", true);
  }
  $("#plus-t7m").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-t7m").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-t7m").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Transductor de 5MHz alta temp -10 a 150°C. Recto
$('#plus-a150').click(function add() {
  var $qtde = $(".cant-a150");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-a150").attr("disabled", true);
    };
      $("#minus-a150").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-a150").attr("disabled", !$(".cant-a150").val());

$('#minus-a150').click(function minust() {
  var $qtde = $(".cant-a150");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-a150").attr("disabled", true);
  }
  $("#plus-a150").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-a150").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-a150").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Transductor de 5MHz alta temp -10 a 350°C. Recto
$('#plus-a350').click(function add() {
  var $qtde = $(".cant-a350");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-a350").attr("disabled", true);
    };
      $("#minus-a350").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-a350").attr("disabled", !$(".cant-a350").val());

$('#minus-a350').click(function minust() {
  var $qtde = $(".cant-a350");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-a350").attr("disabled", true);
  }
  $("#plus-a350").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-a350").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-a350").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Transductor de 5MHz hi-damp para medir SOBRE PINTURA Ø10mm. 90°
$('#plus-thd').click(function add() {
  var $qtde = $(".cant-thd");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-thd").attr("disabled", true);
    };
      $("#minus-thd").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-thd").attr("disabled", !$(".cant-thd").val());

$('#minus-thd').click(function minust() {
  var $qtde = $(".cant-thd");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-thd").attr("disabled", true);
  }
  $("#plus-thd").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-thd").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-thd").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Transductor de 5MHz hi-damp para medir SOBRE PINTURA similar Krautkramer. Ø10mm. Recto
$('#plus-tsk').click(function add() {
  var $qtde = $(".cant-tsk");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-tsk").attr("disabled", true);
    };
      $("#minus-tsk").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-tsk").attr("disabled", !$(".cant-tsk").val());

$('#minus-tsk').click(function minust() {
  var $qtde = $(".cant-tsk");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-tsk").attr("disabled", true);
  }
  $("#plus-tsk").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-tsk").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-tsk").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Cable con 2 conectores tipo LEMO en ambas puntas.
$('#plus-csk').click(function add() {
  var $qtde = $(".cant-csk");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-csk").attr("disabled", true);
    };
      $("#minus-csk").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-csk").attr("disabled", !$(".cant-csk").val());

$('#minus-csk').click(function minust() {
  var $qtde = $(".cant-csk");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-csk").attr("disabled", true);
  }
  $("#plus-csk").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-csk").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-csk").val(total);
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


//----- Certificado de calibración QS5 E, QS5 DLE
$('#plus-oaa2').click(function add() {
  var $qtde = $(".cant-oaa2");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-oaa2").attr("disabled", true);
    };
      $("#minus-oaa2").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-oaa2").attr("disabled", !$(".cant-oaa2").val());

$('#minus-oaa2').click(function minust() {
  var $qtde = $(".cant-oaa2");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-oaa2").attr("disabled", true);
  }
  $("#plus-oaa2").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-oaa2").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-oaa2").val(total);
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
    var price = parseFloat($(".cant-pa10").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa10").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Funda protectora de silicona para QS2, QS3, QS5 amarilla
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

