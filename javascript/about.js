window.onload = function(){
  if(window.outerWidth<500){
    document.getElementById('info').style.setProperty('margin-left', '5%');
    document.getElementById('info').style.setProperty('margin-right', '5%');
  }else{
    document.getElementById('info').style.setProperty('margin-left', '20%');
    document.getElementById('info').style.setProperty('margin-right', '20%');
  }
}