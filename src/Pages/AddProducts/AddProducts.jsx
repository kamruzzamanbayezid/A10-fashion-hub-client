import { useState } from "react";
import Swal from "sweetalert2";

const AddProducts = () => {

      const [name, setName] = useState('');
      const [brand, setBrand] = useState('');
      const [image, setImage] = useState('');
      const [type, setType] = useState('');
      const [price, setPrice] = useState('');
      const [rating, setRating] = useState(0);
      const [description, setDescription] = useState('')

      const handleAddProducts = e => {
            e.preventDefault();
            const formData = {
                  image,
                  name,
                  brand,
                  type,
                  price,
                  rating,
                  description,
            };

            console.log(formData);
            fetch('https://fashion-hub-server.vercel.app/products', {
                  method: 'POST',
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(formData)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              Swal.fire(
                                    'Good job!',
                                    'Product Added Successfully!',
                                    'success'
                              )
                              
                        }
                  })

      }

      return (
            <div className="max-w-7xl mx-auto my-20">
                  <h1 className="text-center text-3xl mb-5 underline text-[#E7AB3C] font-semibold">Add New Product</h1>
                  <form onSubmit={handleAddProducts} className="lg:w-4/5 p-4 mx-auto">
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                              <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Products Name</label>
                                    <input value={name}
                                          onChange={(e) => setName(e.target.value)} type="text" id="first_name" name="productsName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Products Name" required />
                              </div>
                              <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brands</label>
                                    <input value={brand}
                                          onChange={(e) => setBrand(e.target.value)} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Brands" required />
                              </div>
                              <div>
                                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                                    <input name="type"
                                          value={type}
                                          onChange={(e) => setType(e.target.value)}
                                          type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="type" required />
                              </div>
                              <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="number"
                                          name="price"
                                          value={price}
                                          onChange={(e) => setPrice(e.target.value)} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Price" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                              </div>
                              <div>
                                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                    <input onChange={(e) => setRating(parseInt(e.target.value))} type="number" name='rating' value={rating} min="1" max="5" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rating (1-5)" required />
                              </div>
                              <div>
                                    <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                                    <input name="image"
                                          value={image}
                                          onChange={(e) => setImage(e.target.value)} type="photo_URL" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Photo URL" required />
                              </div>
                        </div>
                        <div className="mb-6">
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort Description</label>
                              <textarea name="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} rows="3" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Short Description" required />
                        </div>

                        <button type="submit" className="text-white hover:bg-transparent hover:border hover:border-[#E7AB3C] bg-[#E7AB3C] hover:text-[#E7AB3C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Products</button>
                  </form>

            </div>
      );
};

export default AddProducts;