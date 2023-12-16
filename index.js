var itemdata={
  portfolio_list: [
    {
      name: "Chatbot Builder",
      img: './wang_img/tool1.png',
      descript: "建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。",
      style: "AI 模型",
      author: "卡卡",
      tag: "#聊天"
    },
    {
      name: "Image Recognition Platform",
      img: "./wang_img/tool2.png",
      descript: "專業的圖像識別平台，識別圖像、分類、標記等。",
      style: "AI 模型",
      author: "杰杰",
      tag: "#影像辨識"
    },
    {
      name: "Language Translation API",
      img: "./wang_img/tool3.png",
      descript: "專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。",
      style: "AI 模型",
      author: "琪琪",
      tag: "#翻譯"
    },
    {
      name: "Sentiment Analysis API",
      img: "./wang_img/tool4.png",
      descript: "自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。",
      style: "AI 模型",
      author: "昊昊",
      tag: "#行銷"
    },
    {
      name: "Fraud Detection Platform",
      img: "./wang_img/tool5.png",
      descript: "預防詐騙活動，適用於銀行、金融、電商等。",
      style: "AI 模型",
      author: "卡卡",
      tag: "#客服"
    },
    {
      name: "Voice Assistant SDK",
      img: "./wang_img/tool6.png",
      descript: "通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。",
      style: "AI 模型",
      author: "杰杰",
      tag: "#生產力"
    }
  ]
};
var vm= new Vue({
  el: "#portfolio",
  data: itemdata
});

// 跑馬燈動畫
var marqueeContent = $(".lg1, .lg2, .lg3, .lg4, .lg5, .lg6, .lg7, .lg8, .lg9, .lg10, .lg11, .lg12");
marqueeContent.on('mouseenter', function(){
  marqueeContent.css('animation-play-state', 'paused');
});

marqueeContent.on('mouseleave',function(){
  marqueeContent.css('animation-play-state', 'running')
});

var custerdata={
  custumer_list: [
    {
      name: "陳小姐",
      img: './wang_img/avatar3.png',
      descript: "非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！",
      company: "ABC科技有限公司",
      star: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      name: "劉小姐",
      img: './wang_img/avatar1.png',
      descript: "作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！",
      company: "XYZ 醫療器材有限公司",
      star: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
      name: "黃先生",
      img: './wang_img/avatar2.png',
      descript: "我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。",
      company: "EFG 銀行",
      star: "⭐️⭐️⭐️⭐️⭐️"
    }
  ]
};
var vm= new Vue({
  el: "#commend",
  data: custerdata
});

$(document).ready(function() {
  var $cardContainer = $(".cards-container");
  var $cards = $(".card1");
  var cardWidth = $cards.outerWidth();
  var totalCards = $cards.length;
  var currentIndex = 0;
  var autoSlideInterval = 6000; //毫秒

  $(".arrow.prev").click(function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - 1;
    updateCarousel();
  });

  $(".arrow.next").click(function() {
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  setInterval(function() {
    currentIndex = (currentIndex < totalCards - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  }, autoSlideInterval);

  function updateCarousel() {
    var newTransformValue = -currentIndex * cardWidth;
    $cardContainer.css("transform", "translateX(" + newTransformValue + "px)");
  }
});

