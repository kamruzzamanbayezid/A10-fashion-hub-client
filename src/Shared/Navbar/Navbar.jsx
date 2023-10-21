import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

      const { user, logOut } = useContext(AuthContent);

      const handleLOgOut = () => {
            logOut()
                  .then(() => {
                        toast.success('SUccessfully Logged Out')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div className="">
                  <div className="bg-[#252525]">
                        <div className="flex justify-between items-center max-w-7xl mx-auto">
                              <div className="flex items-center">
                                    
                                    <div className="flex">
                                          <h2 className="text-[#FFF] text-4xl font-semibold">FASHION<span className="text-[#E7AB3C] font-black">.</span></h2>
                                          <h2 className="text-[#FFF] text-2xl mt-[7px]">Hub</h2>
                                    </div>
                              </div>

                              <ul className="text-[#FFF] font-medium hidden lg:flex">
                                    <NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/' ><li className="py-4 px-8  h-full border border-[#4C4C4C]">HOME</li></NavLink>

                                    <NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/addProducts' ><li className="py-4 px-8  border border-[#4C4C4C] h-full">Add Products</li></NavLink>

                                    <NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/myCart' ><li className="py-4 px-8  border border-[#4C4C4C] h-full">My Cart</li></NavLink>

                                    {
                                          !user && <NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/register' ><li className="py-4 px-8  border border-[#4C4C4C] h-full">Register</li></NavLink>
                                    }

                                    {
                                          user ?
                                                <li onClick={handleLOgOut} className="py-4 px-8 cursor-pointer  border border-[#4C4C4C] h-full">Log out</li>
                                                :
                                                < NavLink className={({ isActive }) => isActive ? 'bg-[#E7AB3C]' : ''} to='/login' ><li className="py-4 px-8  border border-[#4C4C4C] h-full">Login</li></NavLink>


                                    }
                              </ul>
                        </div>

                  </div>

            </div >
      );
};

export default Navbar;