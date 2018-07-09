$(function () {
  var shopid = 0,
   areaid = 0;
  var $checkbox = $('input[type="checkbox"]');
  
  

  Route.getgsshop(function (info) {
    // console.log(1);
    $('.shop').html(template('tpl', info))
    // shopid = $('.shop span.now').data('shopid');
  })
  Route.getgsshoparea(function (info) {
    // console.log(2);
    $('.area').html(template('tpl2', info))
    // areaid = $('.area span.now').data('shopid');
  })

  $checkbox.on('change', function(){
    $(this).siblings('input').prop('checked', false)
  })

  render(shopid, areaid);
  $('.shop').on('click', 'li', function () {
    shopid = $(this).data('id');
    render(shopid, areaid);
    $checkbox.prop('checked', false)
    console.log($(this).siblings().find('span'));
    
    $(this).find('span').addClass('now')
    $(this).siblings().find('span').removeClass('now')
  })

  $('.area').on('click', 'li', function () {
    areaid = $(this).data('id');
    console.log(shopid, areaid);
    $(this).find('span').addClass('now')
    $(this).siblings().find('span').removeClass('now')
    render(shopid, areaid);
    $checkbox.prop('checked', false)

  })

  $('.all_p').on('click', 'li', function () {
    $checkbox.prop('checked', false)
  })

  function render(shopid, areaid) {
    Route.getgsproduct(shopid, areaid, function (info) {
      console.log(info);
      $('.gs_product').html(template('tpl3', info))
    })
  }
})