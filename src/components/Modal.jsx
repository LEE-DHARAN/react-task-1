import React from "react";

const CartModal = ({ isOpen, closeCart, cartItems, removeFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-3/4 sm:w-1/2">
        <h2 className="text-xl font-bold">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center my-2"
            >
              <img src={item.image} alt={item.title} className="h-12" />
              <span>{item.title}</span>
              <span>${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          onClick={closeCart}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
