$(function () {
  var productid = Tools.query(location.search).productid;
  var categoryid = Tools.query(location.search).categoryId;
  var brandName = Tools.query(location.search).brandName;
  brandName = decodeURI(brandName)
  Route.getcategorybyid(categoryid, function (info) {
    info.result[0].brandName = brandName;
    console.log(info);
    
   $(".bijiaNav").html( template("bijianav",info) )
  })
  Route.getproduct(productid, function (info) {
    $(".content").html(template("product-bijia", info));
  })
  Route.getproductcom(productid,function (info) { 
    console.log(info);
    $(".evaluate").html( template("evaluate",info) )
   })
})