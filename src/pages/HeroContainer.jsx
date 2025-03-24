export default function Home() {
    return (
        <>
         <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Premium Quality Makhana</h2>
              <p className="text-gray-600 mb-8">Experience the finest fox nuts, carefully selected and roasted to perfection. A healthy snack that's both delicious and nutritious.</p>
              <button className="bg-black text-white px-8 py-3 flex items-center space-x-2 hover:bg-gray-800 transition">
                <span>Shop Now</span>
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="relative">
              <img 
                src= "./assets/makhana-product.png"
                alt="Makhana Product"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div>
            <main>
              <Home/>

            </main>
          </div>
        </div>
      </section>
        </>
    )
}