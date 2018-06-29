$(function () {
  Route.getindexmenu(function (res) {

    $(".mmm_nav>ul").html(template("tpl", res));
    $(".mmm_nav>ul li.more").nextAll().addClass("show");
    $(".mmm_nav>ul li.more").on("click", function () {

      $(this).nextAll().toggleClass("show");
    })
  });
  Route.getmoneyctrl(function (res) {
    console.log(res);
  $(".mmm_discount .content").html(template("product",res))
  });

})