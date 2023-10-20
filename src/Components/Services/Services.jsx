import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiSecurePaymentLine } from "react-icons/ri";
const Services = () => {
      return (
            <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between shadow-xl my-16 py-12 gap-4">
                        <div className="mb-3 lg:mb-0 md:border-r">
                              <span className="flex justify-center"><CiDeliveryTruck className="text-6xl font-semibold text-[#E7AB3C]"></CiDeliveryTruck></span>
                              <h4 className="text-center font-medium text-xl">Free Delivery</h4>
                              <p className="text-gray-500 text-center">Free Shipping on all order</p>
                        </div>
                        <div className="border-r">
                              <span className="flex justify-center"><GiReturnArrow className="text-6xl font-semibold text-[#E7AB3C]"></GiReturnArrow></span>
                              <h4 className="text-center font-medium text-xl">Return Policy</h4>
                              <p className="text-gray-500 text-center">Free Shipping on all order</p>
                        </div>
                        <div className="border-r">
                              <span className="flex justify-center"><TfiHeadphoneAlt className="text-6xl font-semibold text-[#E7AB3C]"></TfiHeadphoneAlt></span>
                              <h4 className="text-center font-medium text-xl">24/7 Support</h4>
                              <p className="text-gray-500 text-center">Free Shipping on all order</p>
                        </div>
                        <div >
                              <span className="flex justify-center"><RiSecurePaymentLine className="text-6xl font-semibold text-[#E7AB3C]"></RiSecurePaymentLine></span>
                              <h4 className="text-center font-medium text-xl">Secure Payment</h4>
                              <p className="text-gray-500 text-center">Free Shipping on all order</p>
                        </div>


                  </div>
            </div>
      );
};

export default Services;