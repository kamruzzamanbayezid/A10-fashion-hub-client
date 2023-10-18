import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Menubar = () => {
      const [menu, setMenu] = useState(false)

      const handleMenu = () => {
            setMenu(true)
      }

      return (
            <div className="bg-[#4C4C4C]">
                  <div className="max-w-7xl mx-auto ">
                        <ul className={`${menu && 'block'} text-[#FFF] hidden font-medium`}>
                              <NavLink className={({ isActive }) => isActive ? 'bg-[#CCCCCC]' : ''} to='/' ><li className="py-3 px-8 text-sm h-full ">HOME</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'bg-[#CCCCCC]' : ''} to='/addProducts' ><li className="py-3 px-8 text-sm h-full">Add Products</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'bg-[#CCCCCC]' : ''} to='/myCart' ><li className="py-3 px-8 text-sm h-full">My Cart</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'bg-[#CCCCCC]' : ''} to='/login' ><li className="py-3 px-8 text-sm h-full">Login</li></NavLink>
                        </ul>
                        <h3 onClick={handleMenu} className="flex justify-end items-center text-[#FFFFFF] bg-black w-fit px-4 py-1 rounded-lg gap-2 text-xl text-end"><span><HiMenu></HiMenu></span>Menu</h3>
                  </div>
            </div>
      );
};

export default Menubar;