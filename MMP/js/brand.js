$(function () {
  var brandtitleid = getSearch().brandtitleid;
  var title = getSearch().brandTitle;

  title = decodeURI(title);

  $('.hd span').text(title)

  render(brandtitleid, 4);

  function render(id,pagesize) {
    Route.getbrand(id, function(info) {
      // console.log(info);
      info.title = title;
      $('.brand ul').html(template('tpl' , info))
    })

    Route.getbrandproductlist(id, pagesize, function (info2) {
      // console.log(info2);
      
    })

    Route.getproductcom(1, function (info) {
      // console.log(info);
      
    }) 
  }

})