$(function () {
  
 
  //  var pageid=1;
   pageid = Tools.query(location.search).pageid;
  Route.getmoneyctrl(pageid, function (info) {
    console.log(info);

    $(".content").html(template("product", info));
    Tools.fenye({
      pageNum: Math.ceil(info.totalCount / info.pagesize),
      pageVal: "pageid"
    })
  })
})