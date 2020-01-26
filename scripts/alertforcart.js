var cartBtns = document.querySelectorAll('.store-item-icon');

for (i = 0; i < cartBtns.length; i++) {
  cartBtns[i].onclick = function(ev) {
    ev.preventDefault();
    alert('You need to enter your account first');
  }
}