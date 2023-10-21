import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Brand.css'

const Brand = () => {

      const [brands, setBrands] = useState([]);

      useEffect(() => {
            fetch('/brand.json')
                  .then(res => res.json())
                  .then(data => setBrands(data))
      }, []);

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 lg:mb-20 max-w-7xl mx-auto">
                  {
                        brands && brands.map((brand, index) =>

                              <div key={index} className=" flex items-center justify-center card-parents overflow-hidden cursor-pointer  bg-base-100 relative">
                                    <figure>
                                          <img src={brand.image} alt="brand image" />
                                    </figure>

                                    <div className=" card-child card-body absolute top-full left-0 w-full h-full flex justify-end  bg-opacity-50 bg-[#E7AB3C]">
                                          <div className="flex justify-between">
                                                <Link to={`/${brand.brandName}`}>
                                                      <h2 className="text-lg w-fit px-4 py-1 rounded-md underline hover:no-underline bg-white font-medium text-[#000]">Shop now</h2>
                                                </Link>
                                                <h2 className="text-lg w-fit px-4 py-1 rounded-md underline hover:no-underline bg-white font-bold text-[#000]">{brand.brandName}</h2>
                                          </div>
                                    </div>
                              </div>




                        )
                  }
            </div>
      );
};

export default Brand;