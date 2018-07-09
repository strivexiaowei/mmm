$(function () {
  Route.getsitenav(function (info) {
    console.log(info);
    $('.sitenav').html(template('tpl', info));
  })
})