import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Menubar from "../Shared/Menubar/Menubar";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <Menubar></Menubar>
                  <Outlet></Outlet>
                  <Footer></Footer>
                  <Toaster />
            </div>
      );
};

export default Root;