$(function () {


  Route.getindexmenu(function (data) {
    //console.log(data);
    $('.mmp_nav').html(template('tpl', data))

  });

  Route.getmoneyctrl(function (data) {
    // console.log(data);
    $('.mmp_recommended ul').html(template('tpl2', data))

  });

  // 注册点击事件
  $('.mmp_nav').on('click', 'li[data-id="7"]', function () {
    console.log();
    $('li:nth-child(8) ~ li').toggle();
  })

  
})