import React from "react";

const ProductCard = ({ product, addToCart }) => (
  <div className="border p-4 rounded shadow">
    <img src={product.image} alt={product.title} className="h-48 mx-auto" />
    <h3 className="font-bold mt-2">{product.title}</h3>
    <p className="text-green-500">${product.price}</p>
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
