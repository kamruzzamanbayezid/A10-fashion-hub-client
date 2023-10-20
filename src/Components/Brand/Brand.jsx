import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {

      const [brands, setBrands] = useState([]);

      useEffect(() => {
            fetch('/brand.json')
                  .then(res => res.json())
                  .then(data => setBrands(data))
      }, []);

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 lg:mb-20 gap-6 max-w-7xl mx-auto">
                  {
                        brands.map((brand, index) =>
                              <div key={index} className="card card-compact bg-base-100 shadow-xl">
                                    <figure className="h-96">
                                          <img src={brand.image} alt="brand image" />
                                    </figure>
                                    <div className="card-body">
                                          <Link to={`/${brand.brandName}`}>
                                                <h2 className="text-2xl underline hover:no-underline font-extrabold text-center text-[#E7AB3C]">{brand.brandName}</h2>
                                          </Link>
                                    </div>
                              </div>
                        )
                  }
            </div>
      );
};

export default Brand;