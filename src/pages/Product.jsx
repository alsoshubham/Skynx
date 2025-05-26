import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Star, ShoppingCart, Filter } from "lucide-react";
import { getProducts } from "../firebase/products.firebase";

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
      <header className="z-30 bg-off-white pt-8 pb-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-medium text-4xl font-serif text-center text-[#0D0D0D] mb-2">
            Our Products
          </h1>
          <p className="section-description text-[#737373] mt-4 max-w-xl mx-auto text-xl">
            Premium quality spices and blends for every kitchen
          </p>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 py-6">
        {/* Sidebar */}
        <aside className="md:w-64 w-full flex-shrink-0 md:sticky md:top-[7.5rem] md:left-0 md:self-start mb-6 md:mb-0">
          <div className="bg-white border border-[#F3F4F6] rounded-2xl p-6 shadow-sm h-full flex flex-col">
            <div className="flex items-center mb-5">
              <Filter className="w-5 h-5 text-spice-red mr-2" />
              <h3 className="text-lg font-bold text-pepper-black tracking-wide">
                Categories
              </h3>
            </div>
            <div className="space-y-2">
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
        <main className="flex-1 h-auto md:h-[calc(100vh-10rem)] overflow-y-auto pb-8">
          <div className="flex justify-between items-center mb-6 sticky top-0 pt-2 pb-2 z-30 bg-white shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold text-pepper-black">
              {selectedCategory} <span className="font-normal text-charcoal-grey">({filteredProducts.length} products)</span>
            </h2>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-white border border-toasted-brown/10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden relative"
              >
                <div className="relative overflow-hidden aspect-square flex items-center justify-center bg-makhana-cream">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold shadow ${getBadgeColor(
                        product.badge
                      )}`}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="flex flex-col flex-1 p-4">
                  <div className="flex items-center mb-1">
                    <Star className="w-4 h-4 text-turmeric-yellow fill-turmeric-yellow mr-1" />
                    <span className="text-xs text-charcoal-grey font-medium">
                      {product.rating}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold mb-1 text-pepper-black line-clamp-2 leading-tight min-h-[2.5rem]">
                    {product.name}
                  </h3>
                  <div className="mb-2">
                    <div className="text-lg font-bold text-spice-red leading-tight">
                      {product.price}
                    </div>
                    <div className="text-xs text-charcoal-grey">
                      Bulk: {product.bulkPrice}
                    </div>
                  </div>
                  <div className="mt-auto pt-2">
                    <button className="flex items-center justify-center w-full bg-spice-red hover:bg-chili-maroon text-off-white text-sm font-semibold py-2 px-2 rounded-lg transition-colors duration-200 shadow">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
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
