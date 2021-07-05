

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

//----- Transductor 2HHz 12mm
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

//----- Transductor 2HHz 2200
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

//----- Transductor 5HHz
$('#plus-t5m').click(function add() {
  var $qtde = $(".cant-t5m");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-t5m").attr("disabled", true);
    };
      $("#minus-t5m").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-t5m").attr("disabled", !$(".cant-t5m").val());

$('#minus-t5m').click(function minust() {
  var $qtde = $(".cant-t5m");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-t5m").attr("disabled", true);
  }
  $("#plus-t5m").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-t5m").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-t5m").val(total);
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

//----- Transductor Hi-Damp
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


//----- Transductor Alta Temperatura 350º
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

//----- Transductor Alta Temperatura 150º
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

//----- Patrones escalonados 6
$('#plus-pa6').click(function add() {
  var $qtde = $(".cant-pa6");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa6").attr("disabled", true);
    };
      $("#minus-pa6").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa6").attr("disabled", !$(".cant-pa6").val());

$('#minus-pa6').click(function minust() {
  var $qtde = $(".cant-pa6");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa6").attr("disabled", true);
  }
  $("#plus-pa6").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa6").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa6").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});

//----- Patrones escalonados 4
$('#plus-pa4').click(function add() {
  var $qtde = $(".cant-pa4");
  var a = $qtde.val();
  if (a <= 8) {
      a++;
      $qtde.val(a);
    } else {
      $("#plus-pa4").attr("disabled", true);
    };
      $("#minus-pa4").attr("disabled", !a);
      $qtde.val(a);
});
$("#minus-pa4").attr("disabled", !$(".cant-pa4").val());

$('#minus-pa4').click(function minust() {
  var $qtde = $(".cant-pa4");
  var b = $qtde.val();
  if (b >= 2) {
    b--;
    $qtde.val(b);
  } else {
    $("#minus-pa4").attr("disabled", true);
  }
  $("#plus-pa4").attr("disabled", !b);
  $qtde.val(b);
});

/* On change */
$(document).ready(function() {
  function updatePrice() {
    var price = parseFloat($(".cant-pa4").val());
    var total = price;
    var total = total.toFixed(0);
    $("#total-pa4").val(total);
  }

  
// On the click of an input, update the price
  $(document).on("click", "input", updatePrice);
});


//----- Gel Acoplante 100g
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


//----- Gel Acoplante 50g
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

