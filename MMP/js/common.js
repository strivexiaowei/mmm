function getSearch() {
  var txt = location.search.slice(1).split('&');
  var obj = {};
  txt.forEach(function (e, i) {
    var key = e.split('=')[0];
    var value = e.split('=')[1];
    obj[key] = value
  })
  return obj
}


var data = []
var aotum = {
  category: "初代奥特曼,失忆但熟练掌握各种天赋……",
  categoryId: "2b",
  titleId: "2b",
}
var mei = {
  category: "萌妹子软妹子叫早叫醒服务",
  categoryId: "2b",
  titleId: "2b",
}
var pi = {
  category: "一瓶屁",
  categoryId: "2b",
  titleId: "2b",
}
var sa = {
  category: "撒旦毒药、新吸血鬼",
  categoryId: "2b",
  titleId: "2b",
}
var houhui = {
  category: "后悔药",
  categoryId: "2b",
  titleId: "2b",
}
var can = {
  category: "脑残片",
  categoryId: "2b",
  titleId: "2b",
}
var hulu = {
  category: "野生活体葫芦娃，还能护院养媳遛狗看家……",
  categoryId: "2b",
  titleId: "2b",
}
var hanzi = {
  category: "汉子，男人",
  categoryId: "2b",
  titleId: "2b",
}
var dali = {
  category: "大力丸",
  categoryId: "2b",
  titleId: "2b",
}
data.push(aotum, mei, pi, sa, houhui, can, hulu,hanzi,dali);

Route.getcategorytitle(function (info) {
  $('.category .category_title').html(template('tpl', info))
  var arr = info.result;
  arr.forEach(function (e) {
    Route.getcategory(e.titleId, function (info2) {
      info2.result.forEach(function (e) {
        data.push(e)
      })
    })
  })
})



console.log(data);
$('input[type=search]').on('keyup', function () {
  var text = $(this).val()
  // console.log(text.length);

  if (text.length == 0) {
    $(".mmp_search .result").hide();
    return;
  }


  $(".mmp_search .result").show();
  // console.log(text);
  var res = []
  if (text === '2b') {
    data.forEach(function(e) {
      if(e.categoryId === text) {
        res.push(e)
      }
    })
  } else {
    data.forEach(function (e) {
      if (e.category.indexOf(text) !== -1) {
        res.push(e)
      }
    })
  }
  console.log(res);
  
  $(".mmp_search .result").html(template('tpl3', {
    result: res
  }))
})