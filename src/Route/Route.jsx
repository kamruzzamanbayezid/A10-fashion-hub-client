import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  { 
                        path: '/addProducts',
                        element: <AddProducts></AddProducts>
                  },
                  {
                        path: '/myCart',
                        element: <MyCart></MyCart>
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  }
            ]
      }
])

export default router;