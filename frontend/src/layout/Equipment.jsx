import React from "react";
import { Link } from "react-router-dom";

export default function Equipment() {
  return (
    <div className="bg-gray-900 py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-white mb-8">Introducing our products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img className="object-cover w-full h-full" src="/src/assets/img/klong.jpg" alt="Product" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/Details"><button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button></Link>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-green-700 font-bold text-lg">ว่าง</span>
          <Link to="/ShoppingCart" className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img className="object-cover w-full h-full" src="/src/assets/img/imac.jpg" alt="Product" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-red-500 font-bold text-lg">กำลังใช้งาน</span>
          <Link to="/ShoppingCart" className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img className="object-cover w-full h-full" src="/src/assets/img/pingpong.png" alt="Product" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-red-500 font-bold text-lg">กำลังใช้งาน</span>
          <Link to="/ShoppingCart" className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img className="object-cover w-full h-full" src="/src/assets/img/kanam.jpg" alt="Product" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-red-500 font-bold text-lg">กำลังใช้งาน</span>
          <Link to="/ShoppingCart" className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</Link>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="relative overflow-hidden">
          <img className="object-cover w-full h-full" src="/src/assets/img/lampong.jpg" alt="Product" />
          <div className="absolute inset-0 bg-black opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
        <p className="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-red-500 font-bold text-lg">กำลังใช้งาน</span>
          <Link to="/ShoppingCart" className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</Link>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
