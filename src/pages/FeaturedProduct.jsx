import { Star, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../components/useCart";
import { toast } from "react-toastify";
import { products as allProducts } from "../firebase/migration";
import Button from "../components/Button";

const FeaturedProducts = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  // const products = getRandomProducts(allProducts, 6);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts
            .sort(() => 0.5 - Math.random())
            .slice(0, 8)
            .map((product) => {
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
                  </div>

                  <div className="p-4">
                    <div className="text-left">
                      <div className="inline-flex items-center justify-between w-full">
                        <h3 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-amber-600 transition-colors duration-200">
                          {product.name}
                        </h3>
                        <div className="flex gap-2">
                          {!inCart ? (
                            <Button
                              onClick={() => {
                                addToCart(product);
                                toast.success("Added to cart!");
                              }}
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </Button>
                          ) : (
                            <>
                              <Button
                                onClick={() => {
                                  removeFromCart(product.id);
                                  toast.info("Removed from cart");
                                }}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2 text-sm leading-relaxed max-w-xs line-clamp-2">
                        {product.description ||
                          "Explore our wide range of spices sourced from the best farms, and indulge in the goodness of our premium makhana."}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="text-center mt-8">
          <Link to="/products">
            <button className="bg-black hover:bg-gray-700 text-white px-6 py-2 rounded font-semibold text-base transition-colors duration-200">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
