import { useEffect } from "react";
import { useState } from "react";

const Testimonial = () => {

      const [testimonials, setTestimonial] = useState([]);

      useEffect(() => {
            fetch('/testimonial.json')
                  .then(res => res.json())
                  .then(data => setTestimonial(data))
      }, []);

      return (
            <div className="bg-[#E7AB3C] pt-8">
                  <h2 className="max-w-7xl mx-auto text-white p-4 text-4xl font-bold">Here From our Customers!</h2>
                  <div className="p-4 lg:p-0 grid grid-cols-1  lg:grid-cols-3 mb-10 lg:mb-20 gap-6 max-w-7xl mx-auto">
                        {
                              testimonials && testimonials.map((testimonial, index) =>
                                    <div key={index} className="card my-12 lg:my-24 relative bg-base-100 shadow-xl">
                                          <div className="card-body items-center text-center mt-16">
                                                <h2 className="card-title text-center">{testimonial.name}</h2>
                                                <div className="rating">
                                                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                      <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                </div>
                                                <p className="text-sm text-gray-500">{testimonial.text}</p>
                                          </div>
                                          <div className="absolute -top-[60px] left-[130px] md:left-[300px] lg:left-[140px] rounded-full">
                                                <img className="w-32 h-32 rounded-full" src={testimonial.image} alt="" />
                                          </div>
                                          {/* -top-[60px] left-[140px] */}
                                    </div>
                              )
                        }
                  </div>
            </div>
      );
};

export default Testimonial;