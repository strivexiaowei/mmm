$(function () {
  Route.getcategorytitle(function (info) {
    $(".mmm_content").html(template("first-nav", info))
  });

  $(".mmm_content").on("click", "span", function () {
    
    var id = $(this).data("id");
    $(".mmm_content ul").eq(id).toggleClass("show");
    Route.getcategory(id, function (info) {
     console.log(info);
      $(".mmm_content ul").eq(id).html(template("second-nav", info))
    })

  })
})