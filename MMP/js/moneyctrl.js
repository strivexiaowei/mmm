$(function () {

  var param = getSearch()
  var pageid = param.pageid || 0;

  var totalCount = 0;
  var pagesize = 0;
  console.log(pageid)

  render(pageid);

  // 注册上一页下一页
  $('.page span:first').on('click', function (e) {
    pageid = --pageid;
    
    if (pageid < 0) {
      pageid = 0;
      return;
    }
    render(pageid)
    // page();
  })

  $('.page span:last').on('click', function (e) {
    pageid = ++pageid;
    if (pageid > Math.floor(totalCount / pagesize)) {
      pageid = Math.floor(totalCount / pagesize);
      return;
    }
    // page();
    render(pageid)
  })

  // 注册selected改变时间
  $('#selectPage').on('change', function () {
    pageid = $(this).val();
    render(pageid)
  })


  // 给li注册跳转事件
  $('.mmp_recommended ul').on('click', 'li', function () {
    // console.log($(this).data('id'));
    location.href = 'moneyproduct.html?productid=' + $(this).data('id');
  })

  
  function render(id) {
    Route.getmoneyctrl(id, function (info) {
      pagesize = info.pagesize;
      totalCount = info.totalCount;

      $('.mmp_recommended ul').html(template('tpl', info))

      var count = Math.ceil(totalCount / pagesize);

      for (var i = 0; i < count; i++) {
        // console.log(i);
        $('#selectPage').append('<option value="' + i + '">' + (i+1) + '/' + count + '</option>')
      }
      $('#selectPage').val(pageid);
    })
  }
})