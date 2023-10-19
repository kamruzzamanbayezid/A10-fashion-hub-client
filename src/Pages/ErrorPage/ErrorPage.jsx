import { Link } from "react-router-dom";

const ErrorPage = () => {
      return (
            <div className="flex justify-center items-center h-[60vh]">
                  <div>
                        <h1 className="text-9xl text-[#E7AB3C] font-bold">404</h1>
                        <h4 className="mt-7 text-3xl font-semibold text-gray-600">PAGE NOT FOUND</h4>
                        <Link to={`/`}>
                              <button className="cursor-pointer mt-5 hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Back to the Home Page</button>
                        </Link>
                  </div>
            </div>
      );
};

export default ErrorPage;