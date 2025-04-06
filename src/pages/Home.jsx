import { ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Product from "./Product";
import Blogs from "./Blogs";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import MakhanaProduct from "../assets/MakhanaProduct.png";
export default function Home() {
  return (
    <>
      <section className="pb-12 md:pt-6 md:pb-20">
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
              <p className="text-[#737373] mt-4 max-w-2xl mx-auto text-xl">
                Discover the rich flavors and health benefits of our premium
                makhana. Perfect for snacking, cooking, or adding to your
                favorite dishes. Elevate your culinary experience with Skynx
                Globals.
              </p>
              <br />
              <Link to="/contact">
                <button className="bg-black text-white px-8 py-3 flex items-center space-x-2 hover:bg-[#FCA935] transition">
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
              <br />
              <div className="flex mt-4 space-x-5">
                <Link
                  to="https://x.com/"
                  className="text-[#0D0D0D] hover:text-[#FCA935]"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  to="https://"
                  className="text-[#0D0D0D] hover:text-[#FCA935]"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="text-[#ODODOD] hover:text-[#FCA935]"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  to="https://medium.com/@skynxglobalsindia"
                  className="text-[#0D0D0D] hover:text-[#FCA935]">
                  <SiMedium size={24} />
                  </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img
                src={MakhanaProduct}
                alt="Makhana Product"
                className="rounded-lg shadow-xl max-w-full h-auto"
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
