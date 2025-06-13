import { useCart } from "../components/useCart";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  // Currency formatter
  const currency = useMemo(() => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }), []);

  // Calculate subtotal
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      clearCart();
    }
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Add some products to get started!</p>
        <button
          className="bg-[#00695c] hover:bg-[#004d40] text-white py-3 px-6 rounded-lg font-semibold text-base transition-colors duration-200"
          onClick={() => navigate("/")}
          aria-label="Shop Now"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f9fa]">
      <div className="container mx-auto px-2 py-8">
        <h2 className="text-2xl text-left font-medium mb-6">
          Shopping Cart ({cart.length})
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Cart Items */}
          <div className="flex-1 bg-white rounded-2xl shadow p-8 border border-gray-100">
            <ul className="divide-y divide-gray-100">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center py-6">
                  <img
                    src={item.image}
                    alt={item.name ? `Image of ${item.name}` : "Product image"}
                    className="w-20 h-20 object-cover rounded-lg mr-6 border-2 border-white shadow"
                  />
                  <div className="flex-1 min-w-0 bg-gray-50 p-2 rounded-lg">
                    <div className="font-semibold text-lg mb-1">
                      {item.name}
                    </div>
                    {item.desc && (
                      <div className="text-sm text-gray-500 mb-1">
                        {item.desc}
                      </div>
                    )}
                    {item.meta && (
                      <div className="text-xs text-gray-400">{item.meta}</div>
                    )}
                    <div className="flex items-center gap-2 mt-2" aria-label="Quantity controls">
                      <button
                        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                        onClick={() => decrementQuantity(item.id)}
                        aria-label={`Decrease quantity of ${item.name}`}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-2" aria-label={`Quantity of ${item.name}`}>{item.quantity}</span>
                      <button
                        className="px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-lg font-bold"
                        onClick={() => incrementQuantity(item.id)}
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end ml-4">
                    <span className="font-semibold text-base mb-2">
                      {currency.format(item.price * item.quantity)}
                    </span>
                    <button
                      className="text-gray-400 hover:text-red-500 text-xl"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Summary */}
          <div className="w-full lg:w-80 bg-white rounded-2xl shadow p-8 border border-gray-100 h-fit self-start">
            <div className="flex justify-between text-gray-600 mb-2 text-base">
              <span>Subtotal</span>
              <span>{currency.format(subtotal)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total</span>
              <span>{currency.format(subtotal)}</span>
            </div>
            <button
              className="w-full bg-[#00695c] hover:bg-[#004d40] text-white py-3 rounded-lg font-semibold text-base transition-colors duration-200 mb-4"
              onClick={() => navigate("/checkout")}
              aria-label="Proceed to Checkout"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={handleClearCart}
              className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold text-base hover:bg-gray-100"
              aria-label="Clear Cart"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
