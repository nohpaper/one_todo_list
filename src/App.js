import OneTodo from "./components/todo";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DetailPage from "./components/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OneTodo/>,
    errorElement:<p>Not Found</p>
  },
  {
    path: "/detail",
    element: <DetailPage/>,
    errorElement:<p>Not Found</p>
  },
])

/** TODO ::
 *      1. data 위치 이동 및 redux 사용
 *      2. todo.js 에서 클릭 시 /detail/id 주소로 이동되면서 상세 페이지 노출되도록 작업
 * **/
function App() {
  return (
    <div className="App w-[100%] h-[100vh] flex items-center justify-center bg-gray-200 max-md:h-[100svh] max-md:items-start">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
