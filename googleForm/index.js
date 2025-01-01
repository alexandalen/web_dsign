//axios POST 方法
// document.getElementById('submit').addEventListener('click', function () {
//     //獲取所有需要檢查欄位
//     const requiredFields= [
//         {
//             id: 'demo_name',
//             name: '預約可取日',
//         },
//         {
//             id: 'demo_company',
//             name: '公司名稱',
//         },
//     ];
//     //https://docs.google.com/forms/u/0/d/e/1FAIpQLScwrAIlwheD5WdlL9ymbXWYJrFtn2zj0rXE9SSeJoq6kDpnug/formResponse
    
//     const baseUrl= 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScwrAIlwheD5WdlL9ymbXWYJrFtn2zj0rXE9SSeJoq6kDpnug/formResponse';
//     ''

//     let isValid= true; //是否通過檢查
//     let errorMessage= ''; // 錯誤提示訊息
//     //檢查欄位是否有輸入
//     requiredFields.forEach(field =>{
//         const input = document.getElementById(field.id);
//         if (!input.value) {
//             isValid= false;
//             errorMessage += `${field.name} 為必填項\n`;
//             input.style.border= '1px solid #ff0000'; //紅色邊框顯示未填欄位
//         } else{
//             input.style.border= ''; //清除紅色邊框
//         }
//     });
//     //檢查 radio 選項是否選中
//     const paymentRadios = document.getElementsByName('inlineRadioOptions');
//     let isPaymentSelected = false;
//     paymentRadios.forEach(radio=>{
//         if(radio.checked) {
//             isPaymentSelected = true;
//         }
//     });
//     if(! isPaymentSelected){
//         isValid = false;
//         errorMessage += '支付方式 為必填項。\n';
//         document.getElementById('demo_pay').style.border = '1px solid #ff0000'; 
//     }else {
//         document.getElementById('demo_pay').style.border = '';
//     }


//     //如果有欄位未填寫，則顯示錯誤訊息並停止執行
//     if(!isValid){
//         alert(errorMessage);
//         return;
//     }
    

//     //準備要提交的資料
//     const data ={
//         'entry.755701437': document.getElementById('demo_name').value,
//         'entry.279526236': document.getElementById('demo_pay').value,
//         'entry.1911114547': document.getElementById('demo_liveNumber').value || '未填寫',
//         'entry.1130128534': document.getElementById('demo_company').value,
//         'entry.951377038': document.getElementById('demo_textarea').value || '未填寫',
//     };

//     //發送表單
//     axios.post(
//         baseUrl,
//         new URLSearchParams(data),
//         {
//             headers:{
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             }
//         }
//     ).then(()=>{
//         //清空表單
//         requiredFields.forEach(field =>{
//             document.getElementById(field.id).value= '';
//         });
//         document.getElementById('demo_textarea').value= '';
//         alert('資料已送出!!');
//     }).catch((error)=>{
//         console.error('表單提交失敗:', error);
//         alert('表單提交失敗，請稍後再試。');
//     });
// });

//增加copy right 等功能
// (function (w, d, s, l, i) {
//     w[l] = w[l] || []; w[l].push({
//         'gtm.start':
//             new Date().getTime(), event: 'gtm.js'
//     }); var f = d.getElementsByTagName(s)[0],
//         j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
//             'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
// })(window, document, 'script', 'dataLayer', 'GTM-PGQ9WQT');



//ajax POST 方法
$(function() {
    $('#submit').on('click', function() {
        //獲取所有需要檢查欄位
        const requiredFields= [
            {
                id: 'demo_name',
                name: '預約可取日',
            },
            {
                id: 'demo_company',
                name: '公司名稱',
            },
        ];
        let isValid= true; //是否通過檢查
        let errorMessage= ''; // 錯誤提示訊息
        //檢查欄位是否有輸入
        requiredFields.forEach(field =>{
            const input = document.getElementById(field.id);
            if (!input.value) {
                isValid= false;
                errorMessage += `${field.name} 為必填項\n`;
                input.style.border= '1px solid #ff0000'; //紅色邊框顯示未填欄位
            } else{
                input.style.border= ''; //清除紅色邊框
            }
        });
        //檢查 radio 選項是否選中
        const paymentRadios = document.getElementsByName('entry.279526236');
        let selectedRadioValue = '';
        for (const radio of paymentRadios) {
            if (radio.checked) {
                selectedRadioValue = radio.value;
                break;
            }
        }
        if (!selectedRadioValue) {
            isValid = false;
            errorMessage += '支付方式 為必填項。\n';
            document.getElementById('demo_pay').style.border = '1px solid #ff0000';
        } else {
            document.getElementById('demo_pay').style.border = '';
        }
        //如果有欄位未填寫，則顯示錯誤訊息並停止執行
        if(!isValid){
            alert(errorMessage);
            return;
        }
        // 建立data
        const data = {
            // 預約可取日
            'entry.755701437': $('#demo_name').val(),
            // 支付方式
            'entry.279526236': selectedRadioValue,
            // 住戶編號
            'entry.1911114547': $('#demo_liveNumber').val()  || '未填寫',
            // 公司名稱
            'entry.1130128534': $('#demo_company').val()  ,
            // 備註事項
           'entry.951377038': $('#demo_textarea').val() || '未填寫',
        };

        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScwrAIlwheD5WdlL9ymbXWYJrFtn2zj0rXE9SSeJoq6kDpnug/formResponse',
            crossDomain: true,//解決跨網域CORS的問題
            data: data,
            contentType: 'application/x-www-form-urlencoded',
            dataType: 'JSONP',
            complete: function () {
                $('#demo_name').val('') ;
                // $('#demo_pay').val('') ;
                $('#demo_liveNumber').val('') ;
                $('#demo_company').val('') ;
                $('#demo_textarea').val('') ;
                alert('資料已送出！');
            }
        });
    });
});

// $(function () {
//     //提交表單
//     $('#submit').on('click', function () {
//         //獲取所有需要檢查欄位
//         const requiredFields= [
//             {
//                 id: 'demo_name',
//                 name: '預約可取日',
//             },
//             {
//                 id: 'demo_company',
//                 name: '公司名稱',
//             },
//         ];

//         let isValid= true; //是否通過檢查
//         let errorMessage= ''; // 錯誤提示訊息
//         //檢查欄位是否有輸入
//         requiredFields.forEach(field =>{
//             const input = document.getElementById(field.id);
//             if (!input.value) {
//                 isValid= false;
//                 errorMessage += `${field.name} 為必填項\n`;
//                 input.style.border= '1px solid #ff0000'; //紅色邊框顯示未填欄位
//             } else{
//                 input.style.border= ''; //清除紅色邊框
//             }
//         });
//         //檢查 radio 選項是否選中
//         const paymentRadios = document.getElementsByName('inlineRadioOptions');
//         let isPaymentSelected = false;
//         paymentRadios.forEach(radio=>{
//             if(radio.checked) {
//                 isPaymentSelected = true;
//             }
//         });
//         if(! isPaymentSelected){
//             isValid = false;
//             errorMessage += '支付方式 為必填項。\n';
//             document.getElementById('demo_pay').style.border = '1px solid #ff0000'; 
//         }else {
//             document.getElementById('demo_pay').style.border = '';
//         };
//         //如果有欄位未填寫，則顯示錯誤訊息並停止執行
//         if(!isValid){
//             alert(errorMessage);
//             return;
//         }

        

//         // 建立data
//         const data= {
//             // 預約可取日
//             'entry.755701437': $('#demo_name').val(),
//             // 支付方式
//             'entry.279526236': $('#demo_pay').val(),
//             // 住戶編號
//             'entry.1911114547': $('#demo_liveNumber').val()  || '未填寫',
//             // 公司名稱
//             'entry.1130128534': $('#demo_company').val()  ,
//             // 備註事項
//            'entry.951377038': $('#demo_textarea').val() || '未填寫',
//         };


//         // 性別
//         // var sex = function () {
//         //     var v;
//         //     $('[name="demo_radio"]').each(function () {
//         //         if ($(this).prop('checked') === true) v = $(this).val();
//         //     });
//         //     return v;
//         // };

//         // 類別
//         // var cat = $('#demo_select').val() || '未填寫';

//         // 內容
//         // var msg = $('#demo_textarea').val() || '未填寫';

//         // post
//         $.ajax({
//             type: 'POST',
//             url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScwrAIlwheD5WdlL9ymbXWYJrFtn2zj0rXE9SSeJoq6kDpnug/formResponse',
//             crossDomain: true,//解決跨網域CORS的問題
//             data: data,
//             contentType: 'application/json',
//             dataType: 'JSONP',
//             complete: function () {
//                 $('#demo_name').val('') ;
//                 $('#demo_pay').val('') ;
//                 $('#demo_liveNumber').val('') ;
//                 $('#demo_company').val('') ;
//                 $('#demo_textarea').val('') ;
//                 alert('資料已送出！');
//             }
//         });
//     });
// });