$(function () {
  var productId = Tools.query(location.search).productId;
  Route.getmoneyctrlproduct(productId,function (info) { 

    console.log(info);
    
    $(".proDesc").html( template("proDesc",info) );
    
   });


})