import React from "react";
import { useCart } from "./useCart";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleBulkQuote = () => {
    // Pass product names as a query param to Contact page
    const names = cart.map((item) => item.name).join(", ");
    navigate("/contact?products=" + encodeURIComponent(names));
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500">Add some products to get started!</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <ul className="divide-y divide-gray-200 mb-8">
        {cart.map((item) => (
          <li key={item.id} className="flex items-center py-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
            <div className="flex-1">
              <div className="font-semibold text-lg">{item.name}</div>
              {/* Price removed as per user request */}
            </div>
            <button className="ml-4 text-red-500 hover:underline" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <button
          onClick={handleBulkQuote}
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-semibold text-base transition-colors duration-200"
        >
          Bulk Quote
        </button>
        <button
          onClick={clearCart}
          className="border border-gray-400 text-gray-700 px-6 py-2 rounded font-semibold text-base hover:bg-gray-100"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
