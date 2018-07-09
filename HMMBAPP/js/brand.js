$(function () {
  var brandTitleid = Tools.query(location.search).brandTitleid;


  var text = Tools.query(location.search).brandTitle;;
  text = decodeURI(text).split("十")[0];
  $(".hotlist p.first").text(text + "那个牌子好")
  $(".hotlist p.secend").text(text + "产量销量排行")
  Route.getbrand(brandTitleid, function (info) {

    console.log(info);
    $(".brandInfo").html(template("list", info))
  })
  var pagesize = 4;

  Route.getbrandproductlist(brandTitleid, pagesize, function (info) {
    console.log(info);
    $(".product-brand").html(template("product", info))
    var imgs = info.result[0].productImg;
    var head = info.result[0].productName;
    var productid = info.result[0].productId;
    Route.getproductcom(productid, function (info) {
      info.result.forEach(function (e, i) {
        e.productImg = imgs;
        e.productName = head;
      })
      console.log(info);
      
      $(".evaluate").html(template("evaluate", info))
    });
  })

})