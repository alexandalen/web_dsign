// api 串接
const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數

// 註冊頁面 DOM
const signUpForm = document.querySelector('.type');
const alertText= document.querySelectorAll('.alert');
const alertEmail= document.querySelector('.alert-mail');
const alertNickname= document.querySelector('.alert-nickname');
const alertPassword= document.querySelector('.alert-password');
const alertPasswordAgain= document.querySelector('.alert-password-again');

// 註冊表單驗證
const signUpFormCheck = (form) => {
    const emailTest = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const nicknameTest = /^[\u4E00-\u9FA5A-Za-z\s]+(·[\u4E00-\u9FA5A-Za-z]+)*$/;
    const passwordTest = /^[A-Za-z0-9]{6,12}$/;
    if(!emailTest.test(form.formmail.value)){
        alert("請輸入正確的信箱格式\ntest@domain.com");
        alertEmail.classList.remove('vbhidden');
        return;
    }else if(!nicknameTest.test(form.formname.value)){
        alertEmail.classList.add('vbhidden');
        alert("請輸入正確的暱稱\n規則:中文或英文");
        form.formname.value= "";
        alertNickname.classList.remove('vbhidden');
        return;
    }else if(!passwordTest.test(form.formpassword.value)){
        alertNickname.classList.add('vbhidden');
        alert("請輸入正確的密碼格式\n密碼：英文或數字 6~12碼");
        form.formpassword.value= "";
        alertPassword.classList.remove('vbhidden');
        return;
    }else if(form.formcheck.value !== form.formpassword.value){
        alert("輸入錯誤，請填入正確的密碼");
        form.formcheck.value= "";
        alertPasswordAgain.classList.remove('vbhidden');
        return;
    }else{
        alertPasswordAgain.classList.add('vbhidden');
        return true;
    }
};

// 預設先拿掉所有輸入警告
alertText.forEach(item => item.classList.add('vbhidden'));

// 註冊按鈕監聽和axios post api
document.querySelector('.btn').addEventListener('click', (e)=> {
    e.preventDefault();
    let dataForm={};

    if(signUpFormCheck(signUpForm)){
        dataForm ={
            "user" :{
                "email": signUpForm.formmail.value,
                "nickname": signUpForm.formname.value,
                "password": signUpForm.formpassword.value
            }
        };
        axios.post(`${baseURL}/users`, dataForm)
            .then(response => {
                alert(`-----${response.data.message}-----
                ${response.data.nickname}您好!
                註冊信箱: ${response.data.email}請記得您的帳號(信箱)與密碼`
                );
                signUpForm.submit();
            })
            .catch(error =>{
                alert(`${signUpForm.formname.value} 很抱歉
                $(error.response.data.message)
                電子信箱: ${signUpForm.formmail.value}
                ${error.response.data.error}`);
                signUpForm.formmail.value ="";
                alertEmail.classList.remove('vbhidden')
            });
    }else{
        return;
    }
});
