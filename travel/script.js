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


var itemdata={
  shoplist: [
    {
      name: "將軍觀光漁港",
      address: "台南市 將軍區",
      img: 'https://imgur.com/SvicbOs.jpeg'
    },
    {
      name: "蘆竹溝觀光漁港",
      address: "台南市 北門區",
      img: 'https://imgur.com/B8IyZEY.jpeg'
    },
    {
      name: "馬沙溝海洋休閒運動度假..",
      address: "台南市 將軍區",
      img: 'https://imgur.com/QMhHrV7.jpeg'
    },
    {
      name: "觀海樓",
      address: "台南市 七股區",
      img: 'https://imgur.com/BQvWRa6.jpeg'
    },
    {
      name: "蚵寮漁港",
      address: "台南市 北門區",
      img: 'https://imgur.com/woJ7gjs.jpeg'
    },
    {
      name: "台灣烏腳病醫療紀念館",
      address: "台南市 北門區",
      img: 'https://imgur.com/EnA3hYq.jpeg'
    },
    {
      name: "北門潟湖",
      address: "台南市 北門區",
      img: 'https://imgur.com/6OfiwJ7.jpeg'
    },
    {
      name: "七股鹽山",
      address: "台南市 七股區",
      img: 'https://imgur.com/j2UCBwg.jpeg'
    },
    {
      name: "龍山宮",
      address: "台南市 七股區",
      img: 'https://imgur.com/ujTVMYt.jpeg'
    },
  ]
};

var vm= new Vue({
  el: "#shop_item",
  data: itemdata
});