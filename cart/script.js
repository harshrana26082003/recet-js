$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change',function(e){
        update_amounts();
    })
})  
function update_amounts(){
    var sum = 0.0;
    $('#my table > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price) ;  sum+=amount;
      
        $(this).find('.amount').text(''+amount);
    });
    $('.total').text(sum);
}




var incrementqty;
var decrementqty;
var plusbtn = $(".cart-qty-plus");
var minusbtn = $(".cart-qty-minus");

var incrementqty = plusbtn .click(function(){
    var $n =$(this)
    .parent(".button-container")
    .find(".qty")
    $n.val(Number($n.val())+1);
    update_amounts();
})

var decrementqty = minusbtn .click(function(){
    var $n =$(this)
    .parent(".button-container")
    .find(".qty")
    var Qtyval = Number($n.val());
   if(Qtyval>0){
    $n.val(Qtyval-1)
   }
    update_amounts();
});

