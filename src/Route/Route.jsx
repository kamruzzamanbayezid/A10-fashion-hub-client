import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Nike from "../Pages/Nike/Nike";
import Adidas from "../Pages/Addidas/Adidas";

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
                  },
                  {
                        path: '/nike',
                        element: <Nike></Nike>,
                        loader: () => fetch('http://localhost:7001/products/Nike')
                  },
                  {
                        path: '/Adidas',
                        element: <Adidas></Adidas>,
                        loader: () => fetch('http://localhost:7001/products/Adidas')
                  }
            ]
      }
])

export default router;