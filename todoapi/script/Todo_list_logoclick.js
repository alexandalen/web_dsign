// api 串接
const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數

// 判斷當有權限登入時 logo留在list頁面 沒有則跳轉回登入頁面
const logo = document.querySelector('.logo');

logo.addEventListener("click", e =>{
    e.preventDefault();
    const config ={
        header:{
            authorization: window.localStorage.getItem('token')
        },
    };
    axios.get(`${baseURL}/check`, config)
    .then(response =>{
        window.location.pathname = 'Todo_list_vue_test.html';
    })
    .catch(error =>{
        window.location.pathname = 'index.html';
    });

})