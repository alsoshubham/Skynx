import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { getProducts } from "../firebase/products.firebase";
import { useCart } from "../components/useCart";
import { toast } from "react-toastify";

// Data arrays outside the component for clarity and reusability
const categories = [
  "All",
  "Whole Spices",
  "Ground Spices",
  "Spice Blends",
  "Premium Collection",
  "Organic Range",
  "Retail Packs",
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
  const { cart, addToCart } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  // Fetch products from Firestore on mount
  useEffect(() => {
    getProducts().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
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

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 py-4">
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

          {/* Product Cards - fixed width and image inside card */}
          <div className="flex flex-wrap gap-4">
            {filteredProducts.map((product, index) => {
              const inCart = cart.some((item) => item.id === product.id);
              const isWholeSpice = (product.category || '').toLowerCase() === 'whole spices';
              return (
                <div
                  key={index}
                  className="bg-white w-72 flex-shrink-0 overflow-hidden rounded-lg shadow-sm cursor-pointer flex flex-col"
                  style={{ scrollSnapAlign: "start" }}
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
                  <div className="p-4 text-center relative flex-1 flex flex-col">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-turmeric-yellow fill-turmeric-yellow mr-1" />
                      <span className="text-xs text-charcoal-grey font-medium">
                        {product.rating}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                        {product.description}
                      </p>
                    )}
                    {!isWholeSpice && (
                      <div className="text-md font-semibold text-spice-red leading-tight mb-1">
                        ₹{product.price}
                      </div>
                    )}
                    <button
                      className={`text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200 flex items-center justify-center w-full mt-auto ${inCart ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
                      onClick={() => {
                        if (!inCart) {
                          addToCart(product);
                          toast.success('Added to cart!');
                        }
                      }}
                      disabled={inCart}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {inCart ? 'In Cart' : 'Add to Cart'}
                    </button>
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
