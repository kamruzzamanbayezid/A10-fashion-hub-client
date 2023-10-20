
const Banner = () => {
      return (
            <div className="bg-[#E7AB3C]"> {/* Replace "bg-primary" with the desired background color class */}
                  <div className="max-w-7xl mx-auto">
                        <div className="p-4 md:pt-8 md:pb-0">
                              <div className="container mx-auto flex flex-col lg:flex-row items-center">
                                    <div className="w-full md:w-4/5 lg:w-1/2 mb-4 lg:mb-0">
                                          <img
                                                src="https://i.ibb.co/qN3WbXH/header-img-png.webphttps://i.ibb.co/F3bP7Vt/header-img-png.webp"
                                                alt="Banner Image"
                                                className="w-full md:mr-4 rounded-lg"
                                          />
                                    </div>
                                    <div className="w-full lg:mt-7 lg:w-1/2">
                                          <div>
                                                <span className="text-xl dark:text-red-600 text-[#FFF] mr-2">Flat</span>
                                                <span className="text-4xl text-white font-semibold">50%Off</span>
                                          </div>
                                          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white my-5 font-bold mb-4">IT’S HAPPENING THIS SEASON!</h2>
                                          <button className="cursor-pointer mt-5 bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-white hover:text-white hover:bg-[#E7AB3C] rounded-full text-xl">Purchase Now</button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;