$(function () {

 Route.getcoupon(function (info) { 
   console.log(info);
   $(".coupon-nav ul").html( template("nav",info))
  })

})