window.onload = function(){
  if(window.outerWidth<500){
    document.getElementById('welcome').style.setProperty('font-size', 'large');
    document.getElementById('welcome').style.setProperty('margin-left', '20%');
    document.getElementById('welcome').style.setProperty('margin-right', '20%');
  }else{
    document.getElementById('welcome').style.setProperty('font-size', 'x-large');
    document.getElementById('welcome').style.setProperty('margin-left', '30%');
    document.getElementById('welcome').style.setProperty('margin-right', '30%');
  }
}