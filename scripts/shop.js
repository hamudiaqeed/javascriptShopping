
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// function cart() {
//     const cartBtn = document.querySelectorAll('.store-item-icon');
    
//     cartBtn.forEach(function(btn) {
//         btn.addEventListener('click', function(ev) {
//             ev.preventDefault();
//             //console.log(event.target);
//         });
//     });
// }

// cart();

var cartBtns = document.querySelectorAll('.store-item-icon');

for (i = 0; i < cartBtns.length; i++) {
  cartBtns[i].onclick = function(ev) {
    ev.preventDefault();
    alert('item added to cart');
  }
}

