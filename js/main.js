// ---- DESACTIVAR SELECCIÓN RATÓN

// $(document).ready(function() {
    
   // Deshabilito el botón derecho del mouse  
   // $(document).bind("contextmenu",function(e){
       // return false;
   //  });
    
// });


// ---- LOADER

$(window).load(function() {
	$(".loader").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})

$(window).addEventListener("load",function() {
   setTimeout(function(){
       // This hides the address bar:
       window.scrollTo(0, 1);
   }, 0);
});




