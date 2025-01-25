
// $(document).ready(function () {
//     // 初始化日期選擇器
//     const dateInput = $("#date");

//     const datePicker = flatpickr(dateInput[0], {
//         dateFormat: "Y-m-d",  // 日期格式
//         locale: "zh",         // 繁體中文
//         enableTime: false,    // 不啟用時間選擇
//         allowInput: true,     // 允許手動輸入
//         // 如果需要，可設置日期範圍：
//         // minDate: "today", 
//         // maxDate: new Date().fp_incr(30),
//     });

//     // 點擊按鈕觸發日期選擇器
//     $("#calendarButton").on("click", function () {
//         datePicker.open();
//     });
// });
   





$(document).ready(function(){
    // 初始化日期選擇器
    const dateInput = $('#date');
    
    const dataPicker = flatpickr(dateInput [0],{
        dataFormat: 'Y-m-d',// 日期格式
        locale: 'zh', //語言
        enableTime: false, //不啟用時間選擇
        allowInput: true, //允許手動輸入日期
        // 如果需要，可設置日期範圍：
        // minDate: "today", 
        // maxDate: new Date().fp_incr(30),
    });
    // 點擊按鈕觸發日期選擇器
    $('#calendarButton').on('click', function(){
        dataPicker.open();
    });
});

$('#submit').on('click', function(){
        const requiredFields= [
        {
            id: 'date',
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
    requiredFields.forEach(field=>{
        const input= document.getElementById(field.id);
        if(!input.value){
            isValid= false;
            errorMessage += `${field.name} 為必填項\n`;
            input.style.border= '1px solid #ff0000'; //紅色邊框顯示未填欄位
        }else{
            input.style.border= ''; //清除紅色邊框
        }
    });
    //檢查 radio 選項是否選中
    const paymentRadios = document.getElementsByName('entry.1368260821');
    let selectedRadioValue = '';
    for (const radio of paymentRadios){
        if(radio.checked){
            selectedRadioValue= radio.value;
            break;
        }
    }
    if (!selectedRadioValue) {
        isValid= false;
        errorMessage += '支付方式 為必填項。\n';
        document.getElementById('demo_pay').style.border= '1px solid #ff0000';
    } else {
        document.getElementById('demo_pay').style.border= '';
    }
    //如果有欄位未填寫，則顯示錯誤訊息並停止執行
    if(!isValid){
        alert(errorMessage);
        return;
    }
    //準備要提交的資料
    // 建立data
    const data = {
        // 預約可取日
        'entry.1873666083': $('#date').val(),
        // 支付方式
        'entry.1368260821': selectedRadioValue,
        // 住戶編號
        'entry.964707051': $('#demo_liveNumber').val()  || '未填寫',
        // 公司名稱
        'entry.1172386167': $('#demo_company').val()  ,
        // 備註事項
        'entry.2080817716': $('#demo_textarea').val() || '未填寫',
    };

    //發送Ajax請求
    // $.ajax({
    //     type: 'POST',
    //     url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSflZOXSBzOQlD-M_jnyE4Ox7XdkvdKvvmnw_aNXgE61A3rD0A/formResponse',
    //     crossDomain: true,//解決跨網域CORS的問題
    //     data: data,
    //     contentType: 'application/x-www-form-urlencoded',
    //     dataType: 'JSONP',
    //     complete: function (){
    //         $('#date').val('') ;
    //         // $('#demo_pay').val('') ;
    //         $('#demo_liveNumber').val('') ;
    //         $('#demo_company').val('') ;
    //         $('#demo_textarea').val('') ;
    //         alert('資料已送出！');
    //     }
    // });

    //fetch 方式
    // 將資料轉換為 URL 編碼格式
    const formData = new URLSearchParams();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    // 使用 Fetch 發送請求
    fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSflZOXSBzOQlD-M_jnyE4Ox7XdkvdKvvmnw_aNXgE61A3rD0A/formResponse',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
        mode: 'no-cors', // 避免 CORS 問題，但無法檢查回應狀態
    })
        .then(()=>{
            $('#date').val('') ;
            // $('#demo_pay').val('') ;
            $('#demo_liveNumber').val('') ;
            $('#demo_company').val('') ;
            $('#demo_textarea').val('') ;
            alert('資料已送出！');
        })
        .catch (error =>
            // console.error('錯誤:',error);
            alert('資料送出失敗，請稍後再試！') 
        );
});