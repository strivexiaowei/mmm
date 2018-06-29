$(function () {
  var productid = Tools.query(location.search).productid;
  Route.getdiscountproduct(productid,function (info) {
    console.log(info);
    $(".proDesc").html( template("proDesc",info) )
    })
})