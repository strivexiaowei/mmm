$(function () { 
  Route.getinlanddiscount(function (info) {

    console.log(info);
    $(".content").html(template("tpl",info) );
    })
 })