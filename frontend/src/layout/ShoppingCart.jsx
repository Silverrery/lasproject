import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Luxe card holder",
      image: "/src/assets/img/pingpong.png",
      price: 50,
      quantity: 1,
      height: "10 inches",
      color: "Black",
      composition: "100% calf leather"
    },
    {
      id: 2,
      name: "Luxe card holder",
      image: "/src/assets/img/imac.jpg",
      price: 50,
      quantity: 1,
      height: "10 inches",
      color: "Black",
      composition: "100% calf leather"
    }
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="sm:flex shadow-md my-10">
        <div className="w-full sm:w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>

          {cartItems.map(item => (
            <div key={item.id} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
              <div className="md:w-4/12 2xl:w-1/4 w-full">
                <img src={item.image} alt={item.name} className="h-full object-center object-cover md:block hidden" />
                <img src={item.image} alt={item.name} className="md:hidden w-full h-full object-center object-cover" />
              </div>
              <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{item.id}</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
                  <select aria-label="Select quantity" className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                  </select>
                </div>
                <p className="text-xs leading-3 text-gray-600 pt-2">Height: {item.height}</p>
                <p className="text-xs leading-3 text-gray-600 py-4">Color: {item.color}</p>
                <p className="w-96 text-xs leading-3 text-gray-600">Composition: {item.composition}</p>
                <div className="flex items-center justify-between pt-5">
                  <div className="flex items-center">
                    <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
                    <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={() => removeItem(item.id)}>Remove</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <Link to="/Equipment" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-full sm:w-1/4 md:w-1/2 px-8 py-10 flex flex-col justify-between">
          <div>
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
            </div>
            <Link to="/Confirm">
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
