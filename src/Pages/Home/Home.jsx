import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Services from "../../Components/Services/Services";

const Home = () => {
      return (
            <div>
                  <Banner />
                  {/* Brand names */}
                  <h2 className="text-center text-4xl font-semibold   mt-10 md:mt-20">Shop for Different Categories</h2>
                  <p className="text-center text-gray-500 mb-6 mt-2">Who are in extremely love with eco friendly system.</p>
                  <Brand/>
                  <Services></Services>
                  <ContactUs></ContactUs>
            </div>
      );
};

export default Home;