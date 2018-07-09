$(function () {
  var param = getSearch() 
  var name = decodeURI(param.brandName);
  var category = decodeURI(param.category);
  console.log(category);
  
  $('.categoryTxt span').text(name);
  $('.pz span').text(category);

  Route.getproduct(param.productid, function (info) {
    console.log(info);
    $('.product_t').html(template('tpl', info))
    $('.product_b').html(template('tpl2', info))
  }) 

  // Route.getproductcom(param.productid, function (info) {
  //   console.log(info);
    
  //   // $('.pinglun').html( template('tpl3', info));
  // })
})