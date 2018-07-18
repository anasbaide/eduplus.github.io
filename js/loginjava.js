$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(".btn").click(function(){
  $(".input, .area").val("");
});