$(function () {

  var page = 0;
  var pageSize = 4;

  var done = false;

  render();

  //给window注册滚动事件
  $(window).on("scroll", function () {
    if (done) {
      return;
    }
    var pageHeight = $(window).height();
    var scrollTop = $(window).scrollTop();
    var offsetTop = $(".inladdiscount li:last").offset().top + $(".inladdiscount li:last").innerHeight();
    if (pageHeight + scrollTop >= offsetTop) {
      render();
    }
  });

  function render() {

    if ($('.tips').hasClass('show')) {
      return;
    }

    console.log('已经加载……');

    $('p.tips').addClass('show');
    Route.getinlanddiscount(function (info) {
      info.result = info.result.splice(page, pageSize);

      // console.log(info.result);
      if (info.result.length === 0) {
        $('p.tips').text('已经加载完所有数据……');
        done = true;
        return;
      }
      setTimeout(function () {
        $('.inladdiscount').append(template('tpl', info))
        $('.tips').removeClass('show');
        page += pageSize
      }, 700)

    })
  }
})