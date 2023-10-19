import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";

const ProductsDetails = () => {

      const loadedProduct = useLoaderData();
      console.log(loadedProduct);

      return (
            <div className="bg-slate-100">
                  <div className="max-w-7xl mx-auto pb-10 lg:pt-10">
                        <div className="flex flex-col lg:flex-row lg:h-[80vh] w-11/12 mx-auto gap-6">
                              <figure className="lg:w-2/5 flex items-center">
                                    <img className="w-full rounded-2xl h-96" src={loadedProduct.image} alt="" />
                              </figure>
                              <div className="lg:w-3/5 flex items-center">
                                    <div className="">
                                          <h1 className="text-2xl text-gray-700 font font-bold mb-4">{loadedProduct.name}</h1>
                                          <div className="flex items-center mb-3">
                                                <Rating
                                                      initialRating={loadedProduct.rating}
                                                      readonly
                                                />
                                                <span className="text-xl text-[#E7AB3C] font-bold">({loadedProduct.rating})</span>
                                          </div>
                                          <span className="text-2xl font-bold text-gray-700 dark:text-white">Price: ${loadedProduct.price}</span>
                                          <p className="text-sm text-gray-500 mt-1">{loadedProduct.description}</p>
                                          <button className="cursor-pointer mt-5 hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Add to cart</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default ProductsDetails;