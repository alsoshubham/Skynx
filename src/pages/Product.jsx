import { ShoppingCart } from "lucide-react";

export default function Product() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="font-medium text-4xl  font-serif text-center text-[#0D0D0D] mb-12">Our Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Classic Makhana",
              description: "The original flavor that started it all.",
              price: "$4.99",
              image:
                "https://img.freepik.com/premium-photo/makhana-also-called-as-lotus-seeds-fox-nuts-are-popular-dry-snacks-from-india-served-bowl-selective-focus_466689-19086.jpg?ga=GA1.1.958995320.1740890875&semt=ais_hybrid",
            },
            {
              name: "Spicy Makhana",
              description: "A perfect blend of spices for a fiery kick.",
              price: "$5.99",
              image:
                "https://img.freepik.com/premium-photo/roasted-phool-makhana-crispy-lotus-pops-seed-served-bowl-selective-focus_466689-46259.jpg?w=1380",
            },
            {
              name: "Caramel Makhana",
              description: "A sweet treat for your taste buds.",
              price: "$5.99",
              image:
                "https://img.freepik.com/free-photo/front-view-roasted-nuts-with-honey_141793-4655.jpg?t=st=1742893740~exp=1742897340~hmac=b71860d17b2453b94d2e3e9586d354dd66930838b6c2b9d55cf80a1814ba02e4&w=740",
            },
          ].map((product, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-700 hover:scale-105"
              />
              <h4 className="text-xl mb-2">{product.name}</h4>
              <p className="text-sm text-[#0D0D0D] mb-4">{product.description}</p>
              <div className="flex justify-between items-center p-4">
                <span className="text-lg font-semibold">{product.price}</span>
                <button className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
