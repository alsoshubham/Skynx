import { Star, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Kashmiri Red Chili Powder",
      price: "₹299",
      bulkPrice: "₹12,000/25kg",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/12/369605998/BM/CB/MX/205252686/kashmiri-red-chilli-powder-500x500.jpg",
      rating: 4.9,
      description:
        "Premium quality Kashmiri chili powder with vibrant color and mild heat",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Organic Turmeric Powder",
      price: "₹189",
      bulkPrice: "₹8,500/25kg",
      image:
        "https://img.freepik.com/premium-photo/turmeric-powder-roots-wooden-background_680303-904.jpg",
      rating: 4.8,
      description:
        "Pure organic turmeric with high curcumin content and earthy aroma",
      badge: "Organic",
    },
    {
      id: 3,
      name: "Garam Masala Blend",
      price: "₹249",
      bulkPrice: "₹10,000/25kg",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/11/IX/HN/WE/61556361/garam-masala-powder-500x500.jpg",
      rating: 4.9,
      description:
        "Traditional blend of 12 aromatic spices, perfect for authentic Indian cuisine",
      badge: "Premium",
    },
    {
      id: 4,
      name: "Black Pepper Whole",
      price: "₹599",
      bulkPrice: "₹24,000/25kg",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.fOXneUeDP3_T66UCJJ0rIQHaHa?rs=1&pid=ImgDetMain",
      rating: 4.7,
      description: "Premium Malabar black pepper with intense flavor and aroma",
      badge: "Export Quality",
    },
    {
      id: 5,
      name: "Cardamom Green Pods",
      price: "₹1,299",
      bulkPrice: "₹52,000/25kg",
      image:
        "https://cdn.shopify.com/s/files/1/0062/4214/0227/products/SP_08-02_2048x.jpg?v=1540659059",
      rating: 4.9,
      description: "Grade A green cardamom pods with exceptional fragrance",
      badge: "Premium",
    },
    {
      id: 6,
      name: "Coriander Seeds",
      price: "₹159",
      bulkPrice: "₹6,500/25kg",
      image: "https://gardeningtips.in/wp-content/uploads/2020/05/Comp3-1.jpg",
      rating: 4.6,
      description:
        "Fresh coriander seeds with citrusy flavor and perfect for grinding",
      badge: "Fresh Stock",
    },
  ];

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Bestseller":
        return "bg-red-500";
      case "Organic":
        return "bg-green-500";
      case "Premium":
        return "bg-[#D4af37]"; // Gold color
      case "Export Quality":
        return "bg-blue-500";
      case "Fresh Stock":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

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
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-xl bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-white text-xs font-medium ${getBadgeColor(
                    product.badge
                  )}`}
                >
                  {product.badge}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
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

                <p className="text-gray-600 mb-2 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-xl text-start font-bold text-amber-600">
                      {product.price}
                    </div>
                    <div className="text-xs text-gray-500">
                      Bulk: {product.bulkPrice}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-1.5 px-3 rounded transition-colors duration-200">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </button>
                  <button className="flex-1 border border-amber-600 text-amber-600 font-semibold py-1.5 px-3 rounded hover:bg-amber-50 transition-colors duration-200">
                    Bulk Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/products">
            <button className="text-amber-600 border border-amber-600 hover:bg-amber-50 px-6 py-2 rounded font-semibold text-base transition-colors duration-200">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
