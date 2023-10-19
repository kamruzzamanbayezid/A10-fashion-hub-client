import { Link } from "react-router-dom";


const Gucci = () => {

      return (

            <div className="bg-slate-100 lg:h-[60vh] flex items-center justify-center">
                  <div className="py-10 lg:py-0 px-4">
                        <h2 className="font-bold text-center text-3xl mb-2">"Oops! No Products Found for Gucci"</h2>
                        <p className="text-center text-gray-500 lg:w-3/4 mx-auto">Apologies for the inconvenience. It seems that we don't have any products currently available in the Gucci brand category. We're working hard to curate a selection of high-quality Gucci products for you. Please check back soon to discover the latest fashion trends and accessories from Gucci. In the meantime, explore our other brand categories for a great shopping experience.
                        </p>
                        <div className="flex justify-center">
                              <Link to={`/`}>
                                    <button className="cursor-pointer mt-5 hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Back to the Home Page</button>
                              </Link>
                        </div>
                  </div>
            </div>

      );
};

export default Gucci;