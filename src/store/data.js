import { configureStore, createSlice } from '@reduxjs/toolkit'


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
    },
    indexIsDone(state, action){ //todo.js 사용 index에 따른 isDone 값 변경
      const index = action.payload;
      if (state.items[index]) {
        state.items[index].isDone = !state.items[index].isDone;
      }
    },
    indexIsDelete(state, action){ //todo.js 사용 index에 따른 isDelete 값 변경
      const index = action.payload;
      if (state.items[index]) {
        state.items[index].isDelete = !state.items[index].isDelete;
      }
    },
    changeAll(state, action){ //about.js 사용 save 버튼 클릭 시 모든 값 변경
      const { index, title, content, isDone } = action.payload;
      if (state.items[index]) {
        state.items[index].title = title;
        state.items[index].content = content;
        state.items[index].isDone = isDone;
      }
    },
  }
});

export let { sendTitle, indexIsDone, indexIsDelete, changeAll } = data.actions;

//index.js 에서 Provider태그로 감쌀 때 해당
export default configureStore({
  reducer: {
    data: data.reducer,
  },
});