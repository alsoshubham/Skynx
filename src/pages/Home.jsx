import { ArrowRight } from "lucide-react";
import Product from "./Product";
import Blogs from "./Blogs";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">
                Premium Quality Makhana
              </h2>
              <p className="text-[#737373] mt-4 max-w-2xl mx-auto text-2xl">
                Experience the finest fox nuts, carefully selected and roasted
                to perfection. A healthy snack that's both delicious and
                nutritious.
              </p>
              <br />
              <Link to="/contact">
                <button className="bg-black text-white px-8 py-3 flex items-center space-x-2 hover:bg-gray-800 transition">
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://i.pinimg.com/474x/09/fb/f5/09fbf57b99b2589276dc8f4557734de7.jpg"
                alt="Makhana Product"
                className="rounded-lg shadow-xl aspect-ratio-16/9 max-w-100% h-auto object-cover"
              />
            </div>
          </div>
          <Product />
          <Blogs />
          <Contact />
        </div>
      </section>
    </>
  );
}
