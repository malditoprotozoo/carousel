$(document).ready(function(){
  var imgItems = $(".slider li").length;
  var imgPos = 1;
  for (var i = 0; i < imgItems; i++) {
    $(".pagination").append("<li><span class='fas fa-circle'></span></li>");
  }
  $(".slider li").hide();
  $(".slider li:first").show();
  $(".pagination li:first").css({"color": "orange"});
  $(".pagination li").click(pagination);
  $(".right span").click(nextSlider);
  $(".left span").click(previousSlider);
  function pagination() {
    var paginationPos = $(this).index()+1;
    $(".slider li").hide();
    $(".slider li:nth-child("+paginationPos+")").fadeIn();
    $(".pagination li").css({"color": "grey"});
    $(this).css({"color": "orange"});
    imgPos = paginationPos;
  }
  function nextSlider() {
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    $(".pagination li").css({"color": "grey"});
    $(".pagination li:nth-child("+imgPos+")").css({"color": "orange"});
    $(".slider li").hide();
    $(".slider li:nth-child("+imgPos+")").fadeIn();
  }
  function previousSlider() {
    if(imgPos <= 1){
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    $(".pagination li").css({"color": "grey"});
    $(".pagination li:nth-child("+imgPos+")").css({"color": "orange"});
    $(".slider li").hide();
    $(".slider li:nth-child("+imgPos+")").fadeIn();
  }
});