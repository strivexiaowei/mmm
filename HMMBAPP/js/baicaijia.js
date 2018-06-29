$(function () {
  var scroll;
  Route.getbaicaijiatitle(function (info) {
    console.log(info);
    $(".wraper").html(template("nav", info))
    var num = 0;
    $(".wraper a").each(function (i, e) {

      num += $(this).outerWidth(true);

    })
    $(".wraper").width(num);
     scroll = new IScroll(".title-nav",{
      scrollX:true,
      scrollY:false
    })
  })

  var titleId = 0;
  Route.getbaicaijiaproduct(titleId, function (info) {
    console.log(info);
    $(".content").html(template("list", info))
  })

  $(".wraper").on('click', "a", function () {
    scroll.scrollToElement(this,200,false)
    var titleId = $(this).data("titleid");
    $(this).addClass("now").siblings().removeClass("now");
    Route.getbaicaijiaproduct(titleId, function (info) {
      console.log(info);
      $(".content").html(template("list", info))
    })
  })
})