import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Services from "../../Components/Services/Services";
import Testimonial from "../../Components/Testimonial/Testimonial";

const Home = () => {
      return (
            <div>
                  <Banner />
                  {/* Brand names */}
                  <h2 className="text-center text-4xl font-semibold   mt-10 md:mt-20">Shop for Different Categories</h2>
                  <p className="text-center text-gray-500 mb-6 mt-2">Who are in extremely love with eco friendly system.</p>
                  <Brand />
                  <Services></Services>
                  <Testimonial></Testimonial>
                  <h1 className=" text-center font-semibold text-5xl mb-2">Contact Us!</h1>
                  <p className="text-sm text-center text-gray-500">Need to get in touch with us? Fill out the form with your inquiry</p>
                  <div>
                        <div>
                              <div>
                                    <span></span>
                              </div>
                        </div>
                  </div>
                  <ContactUs></ContactUs>
            </div>
      );
};

export default Home;