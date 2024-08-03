// CRUD建立
// api 串接
Vue.createApp({
  data(){
    return {
      data: [],
      temp: {},
      isactive: "全部項目",
      text:"",
      //編輯item
      editingItem: null,
      username: '' //用戶名的變量

    }
  },
  methods:{
    //新增item
    async getlist() {
      try{
        const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數
        const response = await axios.get(`${baseURL}/todos`,
          {
          headers: { Authorization: window.localStorage.getItem('token') }
         }
        );
        this.data = response.data.todos || [];
        // 根據返回數據判斷有無待辦事項
        if(this.data.length === 0){
          console.log('no todo Items');
        }else{
          //有代辦事項
          console.log('todo items fetched')
        }
      }catch (error){
        alert(error.response.data.message);
        window.location.href = window.localStorage.getItem('loginPage');
        window.localStorage.clear();
      }
    },
    async addItem() {
      // this.data.push({
      //   id: this.data.length+1,
      //   text: this.text,
      //   //完成判斷
      //   completed: false,
      // });
      // this.text= '';
      const newData ={
        "todo": {
          "content": this.text
        }
      };  

      if (!this.text){
        alert('請輸入代辦事項');
        return;
      }

      try{
        const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數
        
        const response= await axios.post(
          `${baseURL}/todos`,
          newData,
          { headers: { Authorization: window.localStorage.getItem('token') } 
          }
        );
        this.getlist(); //重新獲取資料
        this.text='' //清空輸入框
      }catch(error){
        alert("連線異常，請重新嘗試");
        console.error(error);
      }
    },
    //移除item(單個)
    removeItem(item) {
      const baseURL= 'https://todoo.5xcamp.us';
      //用ID來刪除單一item
      // const index=this.data.findIndex(obj => obj.id===item.id);
      // this.data.splice(index,1);
      axios.delete(
        `${baseURL}/todos/${item.id}`,
        { headers: { Authorization: window.localStorage.getItem('token') } }
      )
        .then(()=>{
          // alert('已刪除代辦事項');
          this.getlist();
        })
        .catch(error=>{
          alert('刪除失敗');
          console.error(error);
        });
    },
    //移除所有已完成項目
    removeItemAll(){
      this.data = this.data.filter(item => !item.completed);
    },
    //點擊後 -> icon切換，文字加入刪除線 
    //1. 布林值切換
    toggleIcon(item) {
      item.completed = !item.completed;
    },
    //2. 點擊後切換icon
    getIconClass(item) {
      //ifelse判斷
      return item.completed ? "bi bi-check" : "bi bi-square";
    },
    //編輯item 項目
    //1 點擊編輯icon -> 開始編輯
    startEditing(item) {
      this.editingItem = item;
    },
    //2 完成編輯
    async finishEditing(item) {
      // this.editingItem = null
      if (!this.editingItem.content.trim()) {
        alert("代辦事項內容不能為空");
        return;
      }
      try {
        const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數
        const response = await axios.put(
          `${baseURL}/todos/${item.id}`,
          {"todo": {"content": this.editingItem.content}},
          { headers: { Authorization: window.localStorage.getItem('token') } }
        );
        // 更新成功後，更新元數據並清空暫存
        Object.assign(item,this.editingItem);
        this.editingItem = null;
      }catch(error){
        alert("編輯失敗，請重新嘗試");
        console.error(error);
      }
    },
    //登出api
    async logout(){
      try{
        const baseURL= 'https://todoo.5xcamp.us'; //建立url 參數
        const response = await axios.delete(`${baseURL}/users/sign_out`,
          { headers: { Authorization: window.localStorage.getItem('token') } }
        );
        //清理localstorage
        window.localStorage.clear();
        //提示訊息
        alert("你的帳號已登出");
        //跳轉回登入頁
        window.location.href = './index.html';
      }catch(error){
        alert("登出失敗，請重新嘗試");
        console.error(error);
      }
    },
  },
  computed: {
    //計算未完成數量
    sumItem() {
      return this.data.filter(item => !item.completed).length;
    }, 
    //計算已完成數量
    sumItem1() {
      return this.data.filter(item => item.completed).length;
    },
    //篩選未完成item 和已完成item
    //1 篩選未完成item
    filterData() {
      return this.data.filter(item => !item.completed);
    },
    //2 篩選已完成item
    filterData1(){
      return this.data.filter(item => item.completed);
    },
    //根據不同篩選結果 -> 放入該頁面
    //設定不同頁面style
    //1 全部頁面樣式 
    allStyle() {
      return {
        backgroundColor: this.isactive === "全部項目" ? '' : "transparent",
        color: this.isactive === '待完成項目' || this.isactive === '完成項目' ? '#B08C00' : ''
      };
    },
    //2 待完成項目頁面樣式
    waitingStyle(){
      return {
        backgroundColor: this.isactive === "待完成項目" ? '#fffbf2' : '',
        color: this.isactive === "待完成項目" ? '#574200' : '',
        'border-radius' : this.isactive === "待完成項目" ? '4px 4px 0px 0px' : ""
      };
    },
    finishStyle(){
      return {
        backgroundColor: this.isactive === '完成項目' ? '#fffbf2' : '',
        color: this.isactive === '完成項目' ? "#574200" : '',
        'border-radius' : this.isactive === '完成項目' ? '4px 4px 0px 0px' : ''
      };
    },
  },
  mounted(){
    this.username = window.localStorage.getItem('nickname') || '訪客'
    this.getlist();
  },
}).mount('#app');


// CRUD建立
// Vue.createApp({
//     data(){
//         //一定要用function return的形式
//         return{
//             data: [],
//             temp: {},
//         }
//     },
//     methods:{
//       // #1 如何新增資料 (使用push)
//       addItem() {
//         this.data.push({
//           id: this.data.length + 1,
//           text: this.text,
//         });
//         this.text = '';
//       },
//       // #2 如何移除資料
//       removeItem(item){
//         // console.log(item);
//         // 用id 來刪除
//         const index=this.data.findIndex(obj => obj.id===item.id);
//         this.data.splice(index,1); //splice(項目, 數量)
//       },
//       // #3 如何編輯資料
//       editItem(item){
//         this.temp ={...item}; //避免傳參考 (要解構)
//       },
//       // #4 把資料寫回
//       doneEdit(){
//         const index=this.data.findIndex(obj => obj.id===this.temp.id);
        
//         //把資料寫回索引
//         this.data[index] =this.temp; 
        
//         //清空temp資料
//         this.temp = {};
//       }
//     },
//     computed:{
//       //不修改原始數值的情況產生新值
//       //#1 雙倍運算 num
//       doubleNum(){
//         return this.num *2;
//       },
//       //#2 過濾列表 (很常見的使用情境)
//       filterData(){
//         const newData= this.data.filter(item =>{
//             // data 所選擇的性別 vs ajax所選的性別
//             return item.gender === this.genderFilter //回傳做一個判斷
//           })
//         //如何預設全部
//         if(!this.genderFilter){
//           return this.data;
//         }
//         return newData;
//       }

//     },
// //  欲取得的遠端資訊寫在mounted(生命週期)
//     mounted(){ //此處不用箭頭函式
//       // #1 觸法取得遠端資料
//       this.getRandomUser()

//     }
// }).mount('#app')