

//-------- Elección modelo


$('input[type="radio"]').click(function(){
    if($(this).attr("value")=="QS5B"){
        $(".m-qs5b").show('slow');
    }
    if($(this).attr("value")!="QS5B"){
        $(".m-qs5b").hide('slow');

    } 
    if($(this).attr("value")=="QS5E"){
        $(".m-qs5e").show('slow');
    }
    if($(this).attr("value")!="QS5E"){
        $(".m-qs5e").hide('slow');

    }    
    if($(this).attr("value")=="QS5DL"){
        $(".m-qs5dl").show('slow');
    }
    if($(this).attr("value")!="QS5DL"){
        $(".m-qs5dl").hide('slow');

    } 
    if($(this).attr("value")=="QS5DLE"){
        $(".m-qs5dle").show('slow');
    }
    if($(this).attr("value")!="QS5DLE"){
        $(".m-qs5dle").hide('slow');

    }    
});
$('input[type="radio"]').trigger('click');




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

  