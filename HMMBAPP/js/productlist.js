$(function () {
  var text = Tools.query(location.search).category;
  // console.log(text);
  text = decodeURI(text);
  $(".categoryname").text(text);
  var categoryid = Tools.query(location.search).id;
  var pageid = Tools.query(location.search).pageid;

  render();
  function render() {
    Route.getproductlist(categoryid, pageid, function (info) {
      console.log(info);
      $(".mmm_content .content").html(template("product-list", info));
      Tools.fenye({
        pageNum: Math.ceil(info.totalCount / info.pagesize),
        pageVal: "pageid",
        // start:"productlist.html?pageid"+pageid
        extraStr: "&category=" + text
      });
    })
  }


});