$(function () {

  
  render(getSearch().productid);
  function render(id) {
    Route.getmoneyctrlproduct(id, function (info) {
      console.log(info);
      $('.mmp_moneyproduct').html(template('tpl', info));
      $('.mmp_area').html(template('tpl2', info));
      $('.mmp_message').html(template('tpl3', info));
    })
  }
})