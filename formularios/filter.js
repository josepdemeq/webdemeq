function h(){
    opt = document.getElementsByClassName("lic");
     for (i=0; i<opt.length; i++) {
     opt[i].style.display = "none";
     }
    
    e = document.getElementById("modelo")
    e = e[e.selectedIndex].dataset.hab.split(" ");
    for (x=0;x<e.length;x++){
     opt = document.getElementsByClassName(e[x]);
      if (opt.length) {
       for (i=0; i<opt.length; i++) {
        opt[i].style.display = "";
       }
      }
     }
    }
    h("");