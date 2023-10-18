import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Menubar = () => {
      const [menu, setMenu] = useState(false)

      const handleMenu = () => {
            setMenu(!menu)
      }

      return (
            <div className="bg-[#4C4C4C]">
                  <div className="max-w-7xl mx-auto p-2">
                        <h3 onClick={handleMenu} className="cursor-pointer flex justify-end items-center text-[#FFFFFF] bg-black w-fit px-4 py-1 rounded-lg gap-2 text-xl text-end"><span><HiMenu></HiMenu></span>Menu</h3>
                        <ul className={`${menu ? 'flex flex-col' : 'hidden'} mt-3 text-[#FFF] font-medium`}>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/' ><li className="py-3 px-8 text-sm h-full ">HOME</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/addProducts' ><li className="py-3 px-8 text-sm h-full">Add Products</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/myCart' ><li className="py-3 px-8 text-sm h-full">My Cart</li></NavLink>
                              <NavLink className={({ isActive }) => isActive ? 'rounded-md bg-[#CCCCCC]' : ''} to='/login' ><li className="py-3 px-8 text-sm h-full">Login</li></NavLink>
                        </ul>
                  </div>
            </div>
      );
};

export default Menubar;