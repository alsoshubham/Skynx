import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ShoppingCart, X, Filter } from "lucide-react";
// import { getProducts } from "../firebase/products.firebase";
import { getProducts } from "../Constant";
import { useCart } from "../components/useCart";
import { toast } from "react-toastify";
import Button from "../components/Button";
// Data arrays outside the component for clarity and reusability
const categories = [
  "All",
  "Whole Spices",
  "Ground Spices",
  "Blends",
  "Retail Packs",
  "Makhana"
];

const getBadgeColor = (badge) => {
  switch (badge) {
    case "Bestseller":
      return "bg-spice-red";
    case "Organic":
      return "bg-mint-green";
    case "Premium":
      return "bg-chili-maroon";
    case "Export Quality":
      return "bg-turmeric-yellow text-pepper-black";
    case "Fresh Stock":
      return "bg-toasted-brown";
    case "Family Size":
      return "bg-mint-green";
    case "Combo Pack":
      return "bg-turmeric-yellow text-pepper-black";
    default:
      return "bg-charcoal-grey";
  }
};

const Products = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  // Fetch products from Constant.js on mount
  useEffect(() => {
    // Remove duplicates by product.id
    const uniqueProducts = Array.from(
      new Map(getProducts.map(p => [p.id, p])).values()
    );
    setProducts(uniqueProducts);
  }, []);

  // Initialize selected category from URL params
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      {/* Header */}
      <header className="z-30 bg-off-white pt-6 pb-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-3">
            Our Products
          </h1>
          <p className="section-description text-[#737373] max-w-xl mx-auto text-lg">
            Premium quality spices and blends for every kitchen
          </p>
        </div>
      </header>

      <div className="flex-1 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 py-4">
        {/* Sidebar */}
        <aside className="md:w-64 w-full flex-shrink-0 md:sticky md:top-[7.5rem] md:left-0 md:self-start mb-4 md:mb-0">
          <div className="bg-white border border-[#F3F4F6] rounded-2xl p-1 shadow-sm h-full flex flex-col">
            <div className="flex items-center mb-3">
              <Filter className="w-5 h-5 text-spice-red mr-2" />
              <h3 className="text-lg font-bold text-pepper-black tracking-wide">
                Categories
              </h3>
            </div>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 font-medium border ${
                    selectedCategory === category
                      ? "bg-spice-red text-off-white border-spice-red shadow"
                      : "text-charcoal-grey border-transparent hover:bg-makhana-cream hover:border-toasted-brown/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <main className="flex-1 h-auto md:h-[calc(100vh-10rem)] overflow-y-auto pb-4">
          <div className="flex justify-between items-center mb-4 sticky top-0 pt-1 pb-1 z-30 bg-white shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-pepper-black">
              {selectedCategory}{" "}
              <span className="font-normal text-charcoal-grey">
                ({filteredProducts.length} products)
              </span>
            </h2>
          </div>

          {/* Product Cards - grid layout, no horizontal scroll/crousel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => {
              const inCart = cart.some((item) => item.id === product.id);
              return (
                <div
                  key={index}
                  className="bg-white flex flex-col overflow-hidden rounded-lg shadow-sm cursor-pointer border border-[#F3F4F6] hover:shadow-md transition-shadow duration-200"
                >
                  <div className="relative w-full h-44 flex items-center justify-center bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain w-full h-full rounded-t-lg transition-transform duration-700 hover:scale-105"
                    />
                    {product.badge && (
                      <div
                        className={`absolute bg-[#fca935d9] text-white top-2 left-2 px-2 py-0.5 rounded-full text-xs font-semibold shadow ${getBadgeColor(
                          product.badge
                        )}`}
                      >
                        {product.badge}
                      </div>
                    )}
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

          {filteredProducts.length === 0 && (
            <div className="text-center py-8">
              <p className="text-charcoal-grey">
                No products found in this category.
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
