$(function(){

  $("#ceo").hover(function(){
    $("#ceo-img").css({
      background: "url(images/p1.jpg) no-repeat 0px -200px",
      display: "block"})

  },function(){
    $("#ceo-img").css({
      background: "url(images/p1.jpg) no-repeat 0px 0px",
      })
  });

  // --------------------------------------------------

  $("#ooo").hover(function(){
    $("#ooo-img").css({
      background: "url(images/p2.jpg) no-repeat 0px -200px",
      display: "block"})

  },function(){
    $("#ooo-img").css({
      background: "url(images/p2.jpg) no-repeat 0px 0px",
      })
  });
// --------------------------------------------------

$("#cto").hover(function(){
  $("#cto-img").css({
    background: "url(images/p3.jpg) no-repeat 0px -200px",
    display: "block"})

},function(){
  $("#cto-img").css({
    background: "url(images/p3.jpg) no-repeat 0px 0px",
    })
});


});
