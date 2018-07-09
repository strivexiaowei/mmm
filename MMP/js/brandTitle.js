$(function () {

  Route.getbrandtitle(function (info) {
    console.log(info);
    
    $('.category ul').html(template('tpl', info))
    
  })
})