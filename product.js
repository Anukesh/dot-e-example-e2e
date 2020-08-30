

window.onload = function () {
  document.getElementById('name').innerHTML = sessionStorage.getItem('name');  
  document.getElementById('price').innerHTML  = '$'+sessionStorage.getItem('price');
  document.getElementById('category').innerHTML  = sessionStorage.getItem('category');
  document.getElementById('image').src  = sessionStorage.getItem('imgSrc');
  }
  