
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

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




// function makeItRed() {
//   document.querySelector('.fa-shopping-cart').style.color = 'red';
// }

// function addDigitToCart(ev){
//   // 
//   ev.preventDefault();
//   return console.log('test');
// }


/////////////////////////////////////////////

// var cartBtns = document.querySelectorAll('.store-item-icon');

// for (i = 0; i < cartBtns.length; i++) {
//   cartBtns[i].onclick = function(ev) {
//     ev.preventDefault();
//     alert('item added to cart');
     
//     // var x = 1;
//     // function append() {
      
//     //   for(i = 0; i < cartBtns.length; i++) {
        
//     //     return x++;
//     //   }
//     // }

//     // document.querySelector('#myBtn').appendChild(document.createTextNode(append()));
    

//   }
// }

$(document).ready( function() {

  var count = 0;

  $('.store-item-icon').click( function(ev) {
    ev.preventDefault();
    alert('item added to cart');

    // var append = $('#myBtn').html( function(i, val) {
    //  return val * 1 + 1;
    // });

    

    count++;

    // $('#myBtn').text(count + 'CART').css('color', 'red');

    $('#myBtn').html(count + '<i class="fas fa-shopping-cart"></i>').css('color', 'red');


  });

});

