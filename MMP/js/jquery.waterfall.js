//给jQuery的原型增加方法
$.fn.waterfall = function () {
  //1. 找到父盒子和所有的子盒子
  //2. 根据父盒子和子盒子的宽度计算出来 间歇
  var $box = this;  //父盒子

  var $item = $box.children(); //所有的子盒子
  var boxWidth = $box.width(); //父盒子的宽度
  var itemWidth = $item.width(); //子盒子的宽度
  var column = 5;//一共有5列
  var gap = (boxWidth - column * itemWidth) / (column - 1);//mind the 

  var arr = [0, 0, 0, 0, 0];//记录每一列的高度
  $item.each(function (i, e) {
    var min = Math.min(...arr);//最小值
    var minIndex = arr.indexOf(min);//最小下标

    //设置元素的left和top
    $(this).css({
      left: minIndex * (itemWidth + gap),
      top: min
    });

    //设置完成 之后，需要修改数组的最小列的值
    arr[minIndex] = min + $(this).height() + gap;
  });
  //动态的设置父盒子box的高度,获取到数组中的最大值即可
  //目的：求arr的最大值
  var max = Math.max(...arr);
  $box.height(max);
};