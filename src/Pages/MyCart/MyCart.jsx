import { useLoaderData } from "react-router-dom";

const MyCart = () => {
      const loadedCarts = useLoaderData();

      return (
            <div className="bg-slate-100 py-10">
                  <div className="overflow-x-auto max-w-7xl mx-auto">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr>

                                          <th>Products Photo</th>
                                          <th>Names</th>
                                          <th>prices</th>
                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}
                                    {
                                          loadedCarts?.map(cart => <tr key={cart._id} className="">

                                                <td className="border-t border-b">
                                                      <div className="">
                                                            <div className="">
                                                                  <div className=" w-36 h-auto">
                                                                        <img src={cart.image} alt="Avatar Tailwind CSS Component" />
                                                                  </div>
                                                            </div>
                                                      </div>
                                                </td>
                                                <td className="border-t border-b">
                                                      Zemlak, Daniel and Leannon
                                                      <br />
                                                      <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                                </td>
                                                <td className="border-t border-b">Purple</td>
                                                <th className="border-t border-b">
                                                      <button className="btn btn-ghost btn-xs">details</button>
                                                </th>
                                          </tr>)
                                    }


                              </tbody>


                        </table>
                  </div>
            </div>
      );
};

export default MyCart;