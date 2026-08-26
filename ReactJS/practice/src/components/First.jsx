import React, { useState } from 'react';

export default function ProductFilterList() {
  

  const products = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 29.99 },
    { id: 2, name: 'Running Shoes', category: 'Clothing', price: 79.99 },
    { id: 3, name: 'Mechanical Keyboard', category: 'Electronics', price: 99.99 },
    { id: 4, name: 'Leather Jacket', category: 'Clothing', price: 149.99 },
    { id: 5, name: 'Coffee Mug', category: 'Kitchen', price: 14.99 },
  ];
  

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'All') return true;
    return product.category === selectedCategory;
  });

  return (
    <div className="p-5 font-sans">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Product Catalog</h2>

      {/* Category Filter Buttons */}
      <div className="flex gap-2.5 mb-5">
        {['All', 'Electronics', 'Clothing', 'Kitchen'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="grid gap-4">
        {filteredProducts.map(product => (
          <div
            key={product.id}
            className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-900 m-0 mb-1">
              {product.name}
            </h3>

            <p className="text-sm text-gray-500 m-0">
              Category: {product.category}
            </p>
            <strong className="block mt-2.5 text-gray-950">
              ${product.price}
            </strong>
          </div>
        ))}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="text-gray-500 italic">No products found.</p>
        )}
      </div>
    </div>
  );
}