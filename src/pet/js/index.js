$(function () {

  // 4. 导航对应处理
  let allLis = $("header nav ul li");
  $(allLis[0]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#banner").offset().top,
    }, 1000);
  });
  $(allLis[1]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#introduce").offset().top - 80
    }, 1000);
  });
  $(allLis[2]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#active").offset().top - 80
    }, 1000);
  });
  $(allLis[3]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#select").offset().top - 80
    }, 1000);
  });
  $(allLis[4]).on("click", function () {
    $("html,body").animate({
      scrollTop: $("#blog").offset().top - 80
    }, 1000);
  });

  $(window).trigger("resize");

})