$(function () {
Route.getbrandtitle(function (info) { 
  console.log(info);
  $(".mmm_content").html( template("first-nav",info) )
 })
})