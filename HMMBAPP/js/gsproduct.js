$(function () {

  Route.getgsshop(function (info) {
    // console.log(info);
    $(".left-nav .jd").html(template("dp", info))
  })
  Route.getgsshoparea(function (info) {
    // console.log(info)
    $(".left-nav .hb").html(template("hbdq", info))
  })

  $(".left-nav a").on("click", function () {
    // console.log("heh");

    $(this).find(".sublist").toggleClass("now");
    $(this).siblings().find(".sublist").removeClass("now");
  });
  var shopid = 0;
  var areaid = 0;
  render();

  function render() {
    Route.getgsproduct(shopid, areaid, function (info) {
      console.log(info);
      $(".gspcontent").html(template("items", info));
    })
  }
  $(".left-nav a .jd").on("click", "p", function (e) {
    e.preventDefault();
    // console.log("hehe");
    $(".text-info1").text($(this).find(".text1").text());
    $(this).find(".xuanzhe").addClass("now");
    $(this).siblings().find(".xuanzhe").removeClass("now");
    shopid = $(this).data("id");
    render();
  })
  $(".left-nav a .hb").on("click", "p", function (e) {
    e.preventDefault();
    // console.log("hehe");
    $(".text-info2").text($(this).find(".text2").text());
    $(this).find(".xuanzhe").addClass("now");
    $(this).siblings().find(".xuanzhe").removeClass("now");
    areaid = $(this).data("id");
    render();
  })


})