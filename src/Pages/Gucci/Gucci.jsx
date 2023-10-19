import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const Gucci = () => {
      const loadedProducts = useLoaderData();

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 max-w-7xl mx-auto">
                  {
                        loadedProducts?.map(product =>
                              <div key={product._id} className="w-full bg-white border border-[#E7AB3C] rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <figure className="h-96 w-full">
                                          <img className="p-4 w-full h-full rounded-t-lg" src={product.image} alt="product image" />
                                    </figure>
                                    <div className="px-5 pb-5">

                                          <h5 className="text-xl mb-3 font-semibold tracking-tight text-[#E7AB3C] dark:text-white">{product.name}</h5>
                                          <div className="flex justify-between mb-4">
                                                <span className="text-lg font-bold text-white bg-black px-4 rounded ">{product.brand}</span>
                                                <span className="text-lg text-gray-500 font-medium">{product.type}</span>
                                          </div>


                                          <div className="flex justify-between">
                                                <div className="flex items-center">
                                                      <Rating
                                                            initialRating={product.rating}
                                                            readonly
                                                      />
                                                      <span className="text-xl text-[#E7AB3C] font-bold">({product.rating})</span>
                                                </div>
                                                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                                          </div>
                                          <div className="flex items-center justify-between mt-4">
                                                <button className="cursor-pointer mt-5 hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Details</button>
                                                <button className="cursor-pointer mt-5 hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Update</button>

                                          </div>

                                    </div>
                              </div>

                        )
                  }
            </div>
      );
};

export default Gucci;