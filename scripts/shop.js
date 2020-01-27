
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

function shoppingProducts(title, price) {
  this.title = title;
  this.price = price;
}


var item1 = new shoppingProducts('Nike, Dress', 199);
var item2 = new shoppingProducts('Esprit, Dress, Pink', 154);
var item3 = new shoppingProducts('United Colors of Benetton', 189);
var item4 = new shoppingProducts('Esprit, Dress, Green', 299);
var item5 = new shoppingProducts('Vila, mini, red', 99);
var item6 = new shoppingProducts('Dress X', 89);
var item7 = new shoppingProducts('Dress Y', 199);
var item8 = new shoppingProducts('Dress Z', 179);
// console.log(item1.price);

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

    // var $newH3 = $('<h3></h3>'), newH3 = document.createElement("h3");


    var t = $(this).attr('id'); 
    var total = 0;
    var allTotal = 0;

    if(t == 1 ){
      
      var a = $('#cart1').append(item1.title + ' - ').append(item1.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove1"><i class="fas fa-trash"></i></a>'  + '<br>').css('font-size', '30px');
      // document.getElementById('total').innerHTML = Number(item1.price) + ' lei';
      total = item1.price;
      $('#goToForm').removeClass('disabled');
      $('#1').addClass('disabled');
      $('#remove1').click( function() {
        $(a).remove();
        document.getElementById('total').innerHTML = '0.00' + ' lei';
        $('#goToForm').addClass('disabled');
        $('#1').removeClass('disabled');
        $('#myBtn').html('<i class="fas fa-shopping-cart"></i>').css('color', 'white');
      })
    } 
    // else {
    //   var b = $('#cart2').append(item2.title + ' - ').append(item2.price + ' lei' + '<a href="#" class="cart-item-remove id="remove2"><i class="fas fa-trash"></i></a>'  + '<br>').css('font-size', '30px');
    //   total = item2.price;
    // }
    // } else if(t == 3){
    //   var c = $('.modal-body').append(item3.title + ' - ').append(item3.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove3"><i class="fas fa-trash"></i></a>' + '<br>').css('font-size', '30px');
    //   total = item3.price;

    // } else if(t == 4){
    //   var d = $('.modal-body').append(item4.title + ' - ').append(item4.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove4"><i class="fas fa-trash"></i></a>' + '<br>').css('font-size', '30px');
    //   total = item4.price;

    // } else if(t == 5){
    //   var e = $('.modal-body').append(item5.title + ' - ').append(item5.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove5"><i class="fas fa-trash"></i></a>' + '<br>').css('font-size', '30px');
    //   total = item5.price;

    // } else if(t == 6){
    //   var f = $('.modal-body').append(item6.title + ' - ').append(item6.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove6"><i class="fas fa-trash"></i></a>' + '<br>').css('font-size', '30px');
    //   total = item6.price;

    // } else if(t == 7){
    //   var g = $('.modal-body').append(item7.title + ' - ').append(item7.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove7"><i class="fas fa-trash"></i></a>' +'<br>').css('font-size', '30px');
    //   total = item7.price;

    // } else {
    //   var h = $('.modal-body').append(item8.title + ' - ').append(item8.price + ' lei' + '<a href="#" class="cart-item-remove" id="remove8"><i class="fas fa-trash"></i></a>' + '<br>').css('font-size', '30px');
    //   // var pretH = item8.price;
    //   total = item8.price;
    // }


    // $().each(t, function() {
    //   allTotal += total;
    //   document.getElementById('total').innerHTML = Number(allTotal) + ' lei';
    // })

    while (t < 8) {
      allTotal += total;
      document.getElementById('total').innerHTML = Number(allTotal) + ' lei';
      break;
    }

    
    
  });


  // if ($('#remove1').attr) {
  //   $('#remove1').click( function(ev) {
  //     $(a).remove();
  //   })
    
  // }


  

});

