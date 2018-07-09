$(function () {

  var id = 0;
  var myScroll;
  Route.getbaicaijiatitle(function (info) {
    // console.log(info);
    id = info.result[0].titleId;
    render(id);
    $('#wrapper ul').html(template('tpl', info))
    var ulWidth = 0;
    $('#wrapper li').each(function (i, e) {
      ulWidth += $(this).innerWidth();
    })
    console.log(ulWidth);

    // $('#wrapper ul').width(ulWidth + 1);
    $('#wrapper ul').get(0).style.width = (ulWidth + 1)+ 'px';

    myScroll = new IScroll('#wrapper', {
      scrollX: true,
      scrollY: false,
    });
  })

  $('#wrapper ul').on('click', 'a', function (e) {
    render($(this).data('titleid'));
    $(this).addClass('now').parent().siblings().find('a').removeClass('now');
    myScroll.scrollToElement(this,300,true);
  })

  function render(id) {
    Route.getbaicaijiaproduct(id, function (info) {
      console.log(info);
      $('.bcj-list').html(template('tpl2', info));
    })
  }
})