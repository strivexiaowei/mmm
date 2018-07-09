$(function () {

  
  render(getSearch().productid);
  function render(id) {
    Route.getdiscountproduct(id, function (info) {
      console.log(info);
      $('.discount').html(template('tpl', info));
    })
  }
})