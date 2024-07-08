// CRUD建立
Vue.createApp({
  data(){
    return {
      data: [],
      temp: {},
      isactive: "全部項目",
      text: "",
      // 編輯結果
      editingItem: null,
      genderFilter: [],
    }
  },
  methods:{
    // 增價item
    addItem() {
      this.data.push({
        id: this.data.length+1,
        text: this.text,
        // 完成判斷
        completed: false, 
      });
      this.text = '';
    },
    removeItem(item) {
      // 用ID來刪除單一item
      const index=this.data.findIndex(obj => obj.id===item.id);
      this.data.splice(index,1);
    },
    // 移除所有已完成的項目
    removeItemAll(){
      this.data = this.data.filter(item => !item.completed);
    },
    toggleIcon(item) {
      //切換布林值
      item.completed = !item.completed;
    },
    // 點擊後icon切換
    //bi bi-check' : 'bi bi-square 前面取代後面
    getIconClass(item) {
      return item.completed ? 'bi bi-check' : 'bi bi-square';
    },
    //點擊編輯icon，開始編輯
    startEditing(item) {
      this.editingItem = item;
    },
    // 完成編輯
    finishEditing(item) {
      this.editingItem = null;
    },
    
  },
  computed: {
    // 計算未完成數量
    sumItem(){
      //item => !item.completed 篩選掉已完成的項目
      return this.data.filter(item => !item.completed).length;
    },
    sumItem1(){
      return this.data.filter(item => item.completed).length;
    },
    filterData(){
      return this.data.filter(item => !item.completed);
       // data 所選擇的性別 vs ajax所選的性別
        // return newData === this.genderFilter //回傳做一個判斷
    },
    filterData1(){
      return this.data.filter(item => item.completed);
       // data 所選擇的性別 vs ajax所選的性別
        // return newData === this.genderFilter //回傳做一個判斷
    },
    allStyle(){
      return{
        // this.isactive === '完成項目' ? '#fffbf2' : ''  這是一個ifelse的判斷式
        backgroundColor: this.isactive === '全部項目' ? '' : 'transparent',
        color: this.isactive === '待完成項目' || this.isactive === '完成項目' ? '#B08C00' : ''
      };
    },
    waitingStyle(){
      return {
        backgroundColor: this.isactive === '待完成項目' ? '#fffbf2' : '' ,
        color: this.isactive === '待完成項目' ? '#574200' : '',
        'border-radius': this.isactive === '待完成項目' ? '4px 4px 0px 0px' : ''
      };
    },
    finishStyle(){
      return {
        backgroundColor: this.isactive === '完成項目' ? '#fffbf2' : '' ,
        color: this.isactive === '完成項目' ? '#574200' : '' , 
        'border-radius': this.isactive === '完成項目' ? '4px 4px 0px 0px' : '',
      };
    },

  },
  mounted(){

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