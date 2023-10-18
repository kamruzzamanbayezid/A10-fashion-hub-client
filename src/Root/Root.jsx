import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Menubar from "../Shared/Menubar/Menubar";

const Root = () => {
      return (
            <div>
                  
                  <Navbar></Navbar>
                  <Menubar></Menubar>
                  <Outlet></Outlet>
            </div>
      );
};

export default Root;