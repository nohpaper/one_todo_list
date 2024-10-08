import { configureStore, createSlice } from '@reduxjs/toolkit'

const LOCAL_STORAGE_KEY = "key";

let data = createSlice({ //createSlice = useState
  name: "data",
  initialState:{
    items:[],
    nextId:0,
  },
  /** {
   *    title:"",
   *    content:"",
   *    isDelete:false,
   *    isDone:false,
   * },
  * */

  reducers: {
    //todo.js
    //1. send data(title) / 2. index === idx isDone 변경, 3. index === idx isDelete
    init(state, action){
      const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
      
      if(!localStorageData){
        return;
      }
      
      const list = JSON.parse(localStorageData);
      
      // localStorage 는 누구든지 접근해서 오염 시킬수 있으므로 최소한 array 인지 확인은 해본다.
      if(!Array.isArray(list)){
        return
      }
      
      state.items = list;
    },
    
    //about.js
    //1. send data(title, content, isDone,) /
    sendTitle(state, action){ //todo.js 사용 title send
      state.items.push({
        id:state.nextId,
        title:action.payload,
        content:"",
        isDone:false,
        isDelete:false,
      });
      state.nextId++;
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    indexIsDone(state, action){ //todo.js 사용 index에 따른 isDone 값 변경
      const index = action.payload;
      if (state.items[index]) {
        state.items[index].isDone = !state.items[index].isDone;
      }
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    indexIsDelete(state, action){ //todo.js 사용 index에 따른 isDelete 값 변경
      const index = action.payload;
      if (state.items[index]) {
        state.items[index].isDelete = !state.items[index].isDelete;
      }
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    changeAll(state, action){ //about.js 사용 save 버튼 클릭 시 모든 값 변경
      const { index, title, content, isDone } = action.payload;
      if (state.items[index]) {
        state.items[index].title = title;
        state.items[index].content = content;
        state.items[index].isDone = isDone;
      }
      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
  }
});

export let { init, sendTitle, indexIsDone, indexIsDelete, changeAll } = data.actions;

//index.js 에서 Provider태그로 감쌀 때 해당
export default configureStore({
  reducer: {
    data: data.reducer,
  },
});