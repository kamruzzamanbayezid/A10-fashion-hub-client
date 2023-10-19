import { useContext } from "react";
import { BsGoogle } from "react-icons/bs";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {

      const { googleLogin } = useContext(AuthContent);

      const handleGoogleLogin = () => {
            googleLogin()
                  .then(result => {
                        toast.success('Successfully Logged in')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div>
                  <span onClick={handleGoogleLogin}><BsGoogle className="text-2xl cursor-pointer text-[#E7AB3C]"></BsGoogle></span>
            </div>
      );
};

export default SocialLogin;