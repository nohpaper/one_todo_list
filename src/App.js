import OneTodo from "./components/todo";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import DetailPage from "./components/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OneTodo/>,
    errorElement:<p>Not Found</p>
  },
  {
    path: "/about/:id",
    element: <DetailPage/>,
    errorElement:<p>Not Found</p>
  },
]);

function App() {
  return (
    <div className="App w-[100%] h-[100vh] flex items-center justify-center bg-gray-200 max-md:h-[100svh] max-md:items-start">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
