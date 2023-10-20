

const ContactUs = () => {
      return (
            <div className="my-16 max-w-7xl mx-auto">

                  <div className="flex flex-col lg:flex-row justify-evenly items-center">
                        <div className="flex items-center">
                              <div>
                                    <h1 className=" text-center lg:text-start font-semibold text-5xl mb-2">Contact Us!</h1>
                                    <p className="text-sm text-center lg:text-start text-gray-500">Need to get in touch with us? Fill out the form with your inquiry</p>
                              </div>
                        </div>

                        <div className="w-full max-w-sm p-4 bg-white  rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                              <form className="space-y-6" >
                                    <div>
                                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                          <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required placeholder="your name" />
                                    </div>

                                    <div>
                                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                          <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What can we help you?</label>
                                          <textarea type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>


                                    <button className="cursor-pointer mt-5 w-full hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Send</button>

                              </form>
                        </div>

                  </div>
            </div>
      );
};

export default ContactUs;