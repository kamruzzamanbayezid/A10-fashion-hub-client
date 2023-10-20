import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContent } from "../../Provider/AuthProvider/AuthProvider";

const MyCart = () => {
      const [carts, setCarts] = useState([])
      const { user } = useContext(AuthContent);

      useEffect(() => {
            fetch(`https://fashion-hub-server.vercel.app/addToCart/${user.email}`)
                  .then(res => res.json())
                  .then(data => setCarts(data))
      }, [user.email])

      const handleRemove = (_id) => {

            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        fetch(`https://fashion-hub-server.vercel.app/addToCartSingle/${_id}`, {
                              method: "DELETE"
                        })
                              .then(res => res.json())
                              .then(data => {
                                    if (data.deletedCount > 0) {
                                          Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                          )
                                    }
                                    const remaining = carts.filter(cart => cart._id !== _id)
                                    setCarts(remaining)

                              })
                  }
            }
            )

      }
      return (
            <div className="flex items-center justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                        {
                              carts?.map(cart =>
                                    <div key={cart._id} className="max-w-lg bg-white rounded-t-lg dark:bg-gray-800 ">

                                          <img className="rounded-t-lg h-80 w-full" src={cart.image} alt="" />

                                          <div className="p-5">
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600 dark:text-white">{cart.name}</h5>
                                                <div className="flex items-center justify-between">
                                                      <span className="text-3xl font-bold text-gray-900 dark:text-white">${cart.price}</span>
                                                      <span className="text-lg font-bold text-white bg-black px-4 rounded ">{cart.brand}</span>
                                                </div>
                                          </div>
                                          <button onClick={() => handleRemove(cart._id)} className="cursor-pointer mt-5 hover:bg-white text-black py-2 px-8 font-medium hover:border-2 hover:border-[#E7AB3C] hover:text-[#E7AB3C] bg-[#E7AB3C]  text-xl">Remove</button>
                                    </div>
                              )
                        }
                  </div>
            </div >
      );
};

export default MyCart;