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
                  },
                  {
                        path: '/Gucci',
                        element: <Gucci></Gucci>,
                        loader: () => fetch('http://localhost:7001/products/Gucci')
                  },
                  {
                        path: '/Zara',
                        element: <Zara></Zara>,
                        loader: () => fetch('http://localhost:7001/products/Zara')
                  },
                  {
                        path: '/HM',
                        element: <HM></HM>,
                        loader: () => fetch('http://localhost:7001/products/HM')
                  },
                  {
                        path: '/Levis',
                        element: <Levis></Levis>,
                        loader: () => fetch('http://localhost:7001/products/Levis')
                  },
                  {
                        path: '/productsDetails/:id',
                        element: <ProductsDetails></ProductsDetails>,
                        loader: ({ params }) => fetch(`http://localhost:7001/productSingle/${params.id}`)
                  }
            ]
      }
])

export default router;