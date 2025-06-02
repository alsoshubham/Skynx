import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../components/useCart";
import { toast } from "react-toastify";
import { products as allProducts } from "../firebase/migration";

const getRandomProducts = (arr, count) => {
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const FeaturedProducts = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  const products = getRandomProducts(allProducts, 6);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-medium text-4xl  font-serif text-center text-[#0D0D0D] mb-6">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked premium spices that represent the finest quality and
            authentic flavors from India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const inCart = cart.some((item) => item.id === product.id);
            return (
              <div
                key={product.id}
                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-52 object-cover object-center transition-transform duration-300 group-hover:scale-110 rounded-t-xl"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-white text-xs font-medium bg-gray-500">
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <div className="flex items-center mb-1">
                    <div className="flex items-center text-amber-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">
                      ({product.rating})
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  )}

                  <div className="flex gap-2">
                    {!inCart ? (
                      <button
                        className="flex-1 flex items-center justify-center font-semibold py-1.5 px-3 rounded transition-colors duration-200 bg-amber-600 hover:bg-amber-700 text-white"
                        onClick={() => {
                          addToCart(product);
                          toast.success("Added to cart!");
                        }}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    ) : (
                      <>
                        <button
                          className="flex-1 flex items-center justify-center font-semibold py-1.5 px-3 rounded transition-colors duration-200 bg-gray-300 text-gray-500 cursor-not-allowed"
                          disabled
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          In Cart
                        </button>
                        <button
                          className="flex-1 flex items-center justify-center font-semibold py-1.5 px-3 rounded transition-colors duration-200 border border-red-500 text-red-500 hover:bg-red-50"
                          onClick={() => {
                            removeFromCart(product.id);
                            toast.info("Removed from cart");
                          }}
                        >
                          Remove
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/products">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded font-semibold text-base transition-colors duration-200">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
