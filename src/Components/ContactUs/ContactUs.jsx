

const ContactUs = () => {
      return (
            <div className="my-10 max-w-7xl mx-auto">

                  <div className="flex flex-col lg:flex-row justify-evenly items-center">
                        <div className="flex lg:w-1/2 items-center">
                              <div>
                                    <img className=" mt-6 w-full" src="https://i.ibb.co/3TGzWCt/pink-blue-pushpins-showing-marking-location-map.jpg" alt="" />
                              </div>
                        </div>

                        <div className="w-full lg:w-1/2 p-4 bg-white   dark:bg-gray-800 dark:border-gray-700">
                              <form className="space-y-6" >
                                    <div>
                                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                          <input type="text" name="name" id="name" className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required placeholder="your name" />
                                    </div>

                                    <div>
                                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                          <input type="email" name="email" id="email" className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What can we help you?</label>
                                          <textarea type="text" rows='5' name="name" id="name" className=" border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>


                                    <button className="cursor-pointer mt-5 w-full hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Send</button>

                              </form>
                        </div>

                  </div>
            </div>
      );
};

export default ContactUs;