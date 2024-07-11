// $(window).scroll(function(evt){
//   if($(window).scrollTop()>0){
//     $(".navbar").removeClass("navbar-top");
//   }else{
//     $(".navbar").addClass("navbar-top");
//   }
// });

// // scrollr 初始化
// var s = skrollr.init()

$("li.p1").hover(
  function(){
    $(".img_wrap li img.top1").attr("src", "https://i.imgur.com/0xFhwNd.jpeg") 
  },
  function(){
    $(".img_wrap li img.top1").attr("src", "https://i.imgur.com/wK2ae2V.jpeg")
  }
);
$("li.p2").hover(
  function(){
    $(".img_wrap li img.top1").attr("src", "https://i.imgur.com/sivL5TT.png") 
  },
  function(){
    $(".img_wrap li img.top1").attr("src", "https://i.imgur.com/wK2ae2V.jpeg")
  }
);
$("li.p3").hover(
  function(){
    $(".img_wrap li img.top1").attr("src", "https://imgur.com/EfYwl9R.jpeg") 
  },
  function(){
    $(".img_wrap li img.top1").attr("src", "https://i.imgur.com/wK2ae2V.jpeg")
  }
);
$("li.p4").hover(
  function(){
    $(".img_wrap li img.top1").attr("src", "https://imgur.com/IXSZ0y5.jpeg") 
  },
  function(){
    $(".img_wrap li img.top1").attr("src", "https://i.imgur.com/wK2ae2V.jpeg")
  }
);
//跑馬燈動畫
var marqueeContent = $(".col-md-12.col-sm-12.pic")
// 滑鼠懸停時停止跑馬燈動畫
marqueeContent.on('mouseenter', function(){
  marqueeContent.css('animation-play-state', 'paused');
});

marqueeContent.on('mouseleave',function(){
  marqueeContent.css('animation-play-state', 'running')
});


//下拉式div 動畫
$("li.attraction").hover(
  function(){
    $(".ATTRACTION_tw").css("display", "block"); 
    $(".ATTRACTION_tw").hover(function(){
      $(".ATTRACTION_tw").css("display", "block")
    },function(){
      $(".ATTRACTION_tw").css("display", "none")
    });
  },
  function(){
    $(".ATTRACTION_tw").css("display", "none") 
  }
);
$("li.deli").hover(
  function(){
    $(".Delicacy_tw").css("display", "block"); 
    $(".Delicacy_tw").hover(function(){
      $(".Delicacy_tw").css("display", "block")
    },function(){
      $(".Delicacy_tw").css("display", "none")
    });
  },
  function(){
    $(".Delicacy_tw").css("display", "none") 
  }
);
$("li.acti").hover(
  function(){
    $(".Active_tw").css("display", "block"); 
    $(".Active_tw").hover(function(){
      $(".Active_tw").css("display", "block")
    },function(){
      $(".Active_tw").css("display", "none")
    });
  },
  function(){
    $(".Active_tw").css("display", "none") 
  }
);
$("li.fore").hover(
  function(){
    $(".Forecast_tw").css("display", "block");
    $(".Forecast_tw").hover(function(){
      $(".Forecast_tw").css("display", "block")
    },function(){
      $(".Forecast_tw").css("display", "none")
    });
  },
  function(){
    $(".Forecast_tw").css("display", "none") 
  }
);