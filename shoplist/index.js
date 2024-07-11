itemHTML = "<li id={{itemid}} class='buy-item'>{{num}}. {{name}}<div class='price'>{{price}}</div><div id={{del-id}} data-id={{delid}} class='delbtn'>x</div></li>";

let totalHTML = '<li id={{itemid}} class="buy-item total">{{Sum}}<div class="price">{{price}}</div>'


var itemdata={
  shoplist: [
    {
      name: "影片剪輯",
      price: 5000,
      img: 'https://i.imgur.com/bX0LG2m.png'
    },
    {
      name: "短影片剪輯",
      price: 500,
      img: 'https://i.imgur.com/SOyaABG.jpeg'
    },
    {
      name: "影片及綜藝字幕",
      price: 500,
      img: 'https://i.imgur.com/146bbLT.jpeg'
    },
    {
      name: "3D動畫設計",
      price: 10000,
      img: 'https://i.imgur.com/DxvjsJ1.jpeg'
    },
    {
      name: "前端網頁設計",
      price: 20000,
      img: 'https://i.imgur.com/BVyi80K.jpeg'
    }
  ]
};

var vm= new Vue({
  el: "#shop_item",
  data: itemdata
});

var cartlist ={
  name: 'My Shop Cart',
  time: '2023/09/09',
  list: []
};

function showlist(){
  $('#listitem').html(' ');
  $('#sumPrice').html(' ');
  $('#totalPrice').html(' ');
  //emty the html. avoid the repeat content
  
  var totalPrice =0;
  for(var i=0; i < cartlist.list.length; i++){
    var item = cartlist.list[i]
    totalPrice += Number(item.price);
    var newItemHTML = itemHTML.replace('{{num}}', i + 1)
                              .replace('{{name}}', item.name)
                              .replace('{{price}}', item.price)
                              .replace('{{itemid}}', i)
                              .replace('{{delid}}', i)
                              .replace('{{del-id}}', 'del' + i);
    $('#listitem').append(newItemHTML);
    $('#del' + i).click(
      function(){
        removeItem($(this).attr('data-id'));
      }
    );
    
  }
  var newTotalHTML = totalHTML.replace('{{price}}', totalPrice)
                              .replace('{{Sum}}', 'Sum');
  var deliveryFee = 30; //delivery fee
  var totalWithDelivery= totalPrice + deliveryFee
  var totHTML = totalHTML.replace('{{price}}', totalWithDelivery)
                          .replace('{{Sum}}', 'Total');
  $('#listitem').append(newTotalHTML);
  $('#sumPrice').append(newTotalHTML);
  $('#totalPrice').append(totHTML);
};
showlist();

// select shoplist to copy one to cartlist.list
$('.bookbtn').click(function(){
  var itemName= $(this).closest('.itembox').find('.title').text();
  var itemPrice= $(this).closest('.itembox').find('.price').text();
  
  addItem(itemName,itemPrice)
});
function addItem(name, price){
  cartlist.list.push({
    name: name,
    price: price
  })
  showlist();
};

function removeItem(id){
  cartlist.list.splice(id, 1);
  showlist();
}

$('.clearbtn').click(function(){
  clear();
});

// clear button can remove all the items in the shopping cart
function clear(){
  cartlist.list=[];
  showlist();
};

$('.purchasebtn').click(function(){
  purchase();
});

$('.cancle').click(function(){
  cancle();  
});

$('.confirmbtn').click(function(){
  confirm();
  setTimeout(cancle, 5000);
  setTimeout(clear, 5500);
});

// purchase button can make background turn dark and show confirm box
function purchase(){ 
  $('#confirmBox').css('display', 'block')
  $('#shop').css('filter', 'brightness(50%)')
  $('#shoppingcart').css('filter', 'brightness(50%)')
  $('#confirmBox').css('height', '445');
};

// cancle botton is an 'x'. it can close the confirm box
function cancle(){
  $('#shop').css('filter', 'brightness(100%)');
  $('#shopcart').css('filter', 'brightness(100%)');
  $('#confirmBox').css('display','none');
};

// confirm button can show the success information for 4s then auto automatically close the box 
function confirm(){
  $('#confirmBox').css('height', '560');
};



