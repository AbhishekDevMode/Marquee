import React, { useState } from "react";

const second = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Wireless Mouse", category: "Electronics", price: 29.99 },
    { id: 2, name: "Running Shoes", category: "Clothing", price: 79.99 },
    {
      id: 3,
      name: "Mechanical Keyboard",
      category: "Electronics",
      price: 99.99,
    },
    { id: 4, name: "Leather Jacket", category: "Clothing", price: 149.99 },
    { id: 5, name: "Coffee Mug", category: "Kitchen", price: 14.99 },
  ];

  const res = products.filter((product) => {
    if (selectedCategory == "All") return false;
    return product.category == selectedCategory;
  });

  return (
    <div className="p-5 font-sans">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        <div className="felx gap-2.5 mb-5">
          {["All", "Electronics", "Clothing", "Kitchen"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-2 text-sm font-medium rounded transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default second;
