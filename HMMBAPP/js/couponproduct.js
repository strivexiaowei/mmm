$(function () {
  var couponid = Tools.query(location.search).couponId;
  Route.getcouponproduct(couponid, function (info) {
    console.log(info);
    $(".prolist").html(template("list", info));
  })
  $(".prolist").on("click", "a", function () {

    console.log("hehe");
    var id = $(this).data("id");

  })
})