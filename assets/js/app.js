window.onload=function(){
var img= document.getElementsByClassName("animal");
var select= document.getElementById("select");
select.onchange= function() {
  if(select.value=="original"){
    for(var i=0;i<img.length;i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");
    }
  }
    if(select.value=="blanco-negro"){
      for(var j=0;j<img.length;j++){
        img[j].classList.add("blanco-negro");
        img[j].classList.remove("original");
        img[j].classList.remove("invertir-colores");
        img[j].classList.remove("sepia");
      }
    }
      if(select.value=="sepia"){
        for(var x=0;x<img.length;x++){
          img[x].classList.add("sepia");
          img[x].classList.remove("original");
          img[x].classList.remove("blanco-negro");
          img[x].classList.remove("invertir-colores");
        }
      }
        if(select.value=="invertir-colores"){
          for(var t=0;t<img.length;t++){
            img[t].classList.add("invertir-colores");
            img[t].classList.remove("original");
            img[t].classList.remove("blanco-negro");
            img[t].classList.remove("sepia");
          }
        }



}
}
