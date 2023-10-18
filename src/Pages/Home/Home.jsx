import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";

const Home = () => {
      return (
            <div>
                  <Banner />
                  {/* Brand names */}
                  <h2 className="text-center text-4xl font-semibold   mt-10 md:mt-20">Shop for Different Categories</h2>
                  <p className="text-center text-gray-500 mb-6 mt-2">Who are in extremely love with eco friendly system.</p>
                  <Brand/>
            </div>
      );
};

export default Home;