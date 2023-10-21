import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Nike from "../Pages/Nike/Nike";
import Adidas from "../Pages/Addidas/Adidas";
import Gucci from "../Pages/Gucci/Gucci";
import Zara from "../Pages/Zara/Zara";
import HM from "../Pages/HM/HM";
import Levis from "../Pages/Levis/Levis";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: '/addProducts',
                        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
                  },
                  {
                        path: '/myCart',
                        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                  },
                  {
                        path: '/login',
                        element: <Login></Login>
                  },
                  {
                        path: '/register',
                        element: <Register></Register>
                  },
                  {
                        path: '/nike',
                        element: <Nike></Nike>,
                        loader: () => fetch('https://fashion-hub-server.vercel.app/products/Nike')
                  },
                  {
                        path: '/Adidas',
                        element: <Adidas></Adidas>,
                        loader: () => fetch('https://fashion-hub-server.vercel.app/products/Adidas')
                  },
                  {
                        path: '/Gucci',
                        element: <Gucci></Gucci>,
                  },
                  {
                        path: '/Zara',
                        element: <Zara></Zara>,
                        loader: () => fetch('https://fashion-hub-server.vercel.app/products/Zara')
                  },
                  {
                        path: '/HM',
                        element: <HM></HM>,
                        loader: () => fetch('https://fashion-hub-server.vercel.app/products/HM')
                  },
                  {
                        path: '/Levis',
                        element: <Levis></Levis>,
                        loader: () => fetch('https://fashion-hub-server.vercel.app/products/Levis')
                  },
                  {
                        path: '/productsDetails/:id',
                        element: <PrivateRoute><ProductsDetails></ProductsDetails></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://fashion-hub-server.vercel.app/productSingle/${params.id}`)
                  },
                  {
                        path: '/productsUpdate/:id',
                        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://fashion-hub-server.vercel.app/productSingle/${params.id}`)
                  }
            ]
      }
])

export default router;