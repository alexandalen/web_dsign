// api 串接
const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數

// 註冊頁面 DOM
const loginForm = document.querySelector('.type');
const alertText= document.querySelectorAll('.alert');
const alertEmail= document.querySelector('.alert-mail');
const alertPassword= document.querySelector('.alert-password');

// 預設先拿掉所有輸入警告
alertText.forEach(item => item.classList.add('vbhidden'));

// 註冊按鈕監聽和axios post api
// 使用async await 用法
document.querySelector('.btn').addEventListener('click', async (e)=> {
    e.preventDefault();
    let dataForm={};

    //取得表單中的輸入值
    const formmail = loginForm.formmail.value;
    const formpassword = loginForm.formpassword.value;

    //驗證登入資料
    if(formmail.length==0){
        alert(`所有資料為必填！`);
        alertEmail.classList.add('vbhidden');
        return;
    }else if(formpassword.length ==0){
        alert(`所有資料為必填！`);
        alertEmail.classList.add('vbhidden');
        alertPassword.classList.remove('vbhidden');
        return;
    }else if(formpassword.length <6 || formpassword.length >12){
        alert(`密碼的長度為6~12，請重新輸入！`);
        formpassword = '';
        alertEmail.classList.add('vbhidden');
        alertPassword.classList.remove('vbhidden');
        return;
    }else{
        dataForm={
            "user": {
                "email": formmail,
                "password": formpassword
            }
        }

        try {
            const response= await axios.post(`${baseURL}/users/sign_in`, dataForm);
            //儲存回傳訊息 autorization 是用戶的token
            window.localStorage.setItem('token', response.headers.authorization);
            // 儲存送出的data的nickname
            window.localStorage.setItem('nickname', response.data.nickname);
            //儲存跳轉網頁
            window.localStorage.setItem('loginPage', location.href);
            loginForm.submit();
        } catch (error) {
            console.log('失敗');
            console.log(error);
            if(error.response.status === 401){
                alert(`電子信箱或密碼錯誤。`);
                loginForm.reset();
            }else{
                alert(`${error.response.status}--其他錯誤`)
            }
            window.localStorage.clear();
            alertText.forEach(item =>item.classList.add('vbhidden'));
        }
    }
});


        // axios.post(`${baseURL}/users/sign_in`, dataForm)
        //     .then(response =>{
        //        //儲存回傳訊息 autorization 是用戶的token
        //         window.localStorage.setItem('token', response.headers.authorization);
        //         //儲存送出的data 
        //         window.localStorage.setItem('nickname', response.data.nickname);
        //         //儲存跳轉網頁
        //         window.localStorage.setItem('loginPage', location.href);
        //         loginForm.submit();
        //     })
        //     .catch(error =>{
        //         console.log('失敗');
        //         console.log(error);
        //         if(error.response.status === 401){
        //             alert(`電子信箱或密碼錯誤。`);
        //             loginForm.reset();
        //         }else{
        //             alert(`${error.response.status}--其他錯誤`)
        //         }
        //         window.localStorage.clear();
        //         alertText.forEach(item =>item.classList.add('vbhidden'));
        //     });