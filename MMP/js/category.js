$(function () {
  Route.getcategorytitle(function (info){
    // console.log(info);
    $('.category .category_title').html(template('tpl', info))
    var arr = info.result;
    
    arr.forEach(function(e){ 
      
      Route.getcategory(e.titleId,function (info2) {
        // console.log(info2)
        $('.category .category-content').each(function(i) { 
          if (i == info2.result[0].titleId){
            $(this).html(template('tpl2', info2))
          }
        });
      })
    })
  })

  

  // 注册点击按钮
  $('.category_title').on('click', '.tap', function () {
    $(this).next('.category-content').slideToggle();
  })
})