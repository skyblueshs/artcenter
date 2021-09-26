$(function(){       //시작
  $(window).scroll(function(){
    var top = $(window).scrollTop();
    // var conTop = $(".content").scrollTop();
    // var winH = $(window).height();
    if(top>600){
      $("#quick").fadeIn();
    }else{
      $("#quick").fadeOut();
    }
  });

});       //끝