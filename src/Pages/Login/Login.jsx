import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
      const location = useLocation();
      const navigate = useNavigate();

      const { logIn } = useContext(AuthContent);

      const handleSubmit = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            // validation
            if (password.length < 6) {
                  toast.error('Password must have al least 6 character');
                  return;
            }
            else if (!/[A-Z]/.test(password)) {
                  toast.error("Password doesn't have a capital letter")
                  return;
            }
            else if (!/[^A-Za-z0-9]/.test(password)) {
                  toast.error("Password doesn't have special characters")
                  return;
            }

            // create user 
            logIn(email, password)
                  .then(result => {
                        toast.success('Successfully Logged in');
                        form.reset()
                        navigate(location.state ? location.state : '/')

                  })
                  .catch(error => {
                        toast.error(error.message)
                  })

      }

      return (
            <div className="lg:h-[80vh] bg-slate-100 lg:py-0 flex items-center justify-center">
                  <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <form onSubmit={handleSubmit} className="space-y-6">
                              <div className="flex justify-between items-center">
                                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Log in to your Account</h5>
                                    <SocialLogin></SocialLogin>
                              </div>

                              <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                              </div>

                              <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                              </div>

                              <button className="cursor-pointer mt-5 w-full hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Register</button>

                              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                    Not registered? <Link to='/register' className="text-[#E7AB3C] hover:underline dark:text-blue-500">Create account</Link>
                              </div>
                        </form>
                  </div>

            </div>
      );
};

export default Login;