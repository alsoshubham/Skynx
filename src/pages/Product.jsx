export default function Product() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-serif mb-12 text-center">Our Products</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Classic Makhana",
              description: "The original flavor that started it all.",
              price: "$4.99",
              image:
                "https://images.unsplash.com/photo-1612761636764-449dd570dd2d?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "Spicy Makhana",
              description: "A perfect blend of spices for a fiery kick.",
              price: "$5.99",
              image:
                "https://images.unsplash.com/photo-1612761636764-449dd570dd2d?auto=format&fit=crop&q=80&w=400",
            },
            {
              name: "Caramel Makhana",
              description: "A sweet treat for your taste buds.",
              price: "$5.99",
              image:
                "https://images.unsplash.com/photo-1612761636764-449dd570dd2d?auto=format&fit=crop&q=80&w=400",
            },
          ].map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl mb-2">{product.name}</h4>
              <div className="flex justify-between items-center">
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
