function bigview(element){
  document.getElementById('viewport').style.backgroundImage="url(" + element.src + ")";
  document.getElementById('viewport').style.border="none"
  document.getElementById('viewport').innerHTML="";
}

function unDo(){
  document.getElementById('viewport').style.backgroundImage="";
  document.getElementById('viewport').style.border="5px black solid"
  document.getElementById('viewport').innerHTML="This is where we view products";
}
