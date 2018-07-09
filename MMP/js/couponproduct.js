$(function () {

  var boxWidth = $('.box').width();

  var length = 0;
  var param = getSearch();

  render(param.couponid);

  $('.mask').on('click', function () {
    $(this).hide();
  })

  $('.mask .box').on('click', function (e) {
    e.stopPropagation();
  })
  $('.mmp_couponproduct').on('click', 'li', function () {
    $('.mask').show();
  })

  function render(id) {

    Route.getcouponproduct(id, function (info) {
      console.log(info);
      length = info.result.length;
      $('.box ul').width((length+1) * boxWidth );
      $('.mmp_couponproduct').html(template('tpl', info));

      $('.box ul').html(template('tpl2', info));
      var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
      })    
    })
  }
})