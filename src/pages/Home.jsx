import { ArrowRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Blogs from "./Blogs";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import HeroBanner from "../assets/HeroBanner.png";
import FeaturedProducts from "./FeaturedProduct";
import Testimonial from "./Testimonial";
import CategorySection from "./CategorySection";

export default function Home() {
  return (
    <>
      <section className="hero-container bg-white">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          <div className="grid py-12 md:grid-cols-2 gap-16 text-left items-center">
            <div>
              <h2 className="font-medium text-4xl text-left font-serif text-[#0D0D0D] mb-6">
                Discover the Finest Spices & Premium Makhana
              </h2>
              <p className="text-[#737373] font-serif max-w-xl text-lg mb-6">
                Explore our wide range of spices sourced from the best farms, and indulge in the goodness of our premium makhana.
              </p>
              <Link to="/products">
                <button className="bg-black text-white px-6 py-2 flex items-center space-x-2 hover:bg-[#28282b] transition rounded-lg text-sm font-semibold shadow-md">
                  <span>Shop Now</span>
                  <ArrowRight size={22} />
                </button>
              </Link>
              <div className="flex space-x-6 mt-8">
                <Link
                  to="https://x.com/"
                  className="text-[#0D0D0D] hover:text-[#FCA935]"
                >
                  <FaTwitter size={26} />
                </Link>
                <Link
                  to="https://"
                  className="text-[#0D0D0D] hover:text-[#FCA935]"
                >
                  <FaFacebook size={26} />
                </Link>
                <Link
                  to="https://www.instagram.com/"
                  className="text-[#0D0D0D] hover:text-[#FCA935]"
                >
                  <FaInstagram size={26} />
                </Link>
                <Link
                  to="https://medium.com/@skynxglobalsindia"
                  className="text-[#0D0D0D] hover:text-[#FCA935]">
                  <SiMedium size={26} />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl hover:shadow-2xl transition-shadow p-2 bg-[#faf7f2] flex justify-center">
              <img
                src={HeroBanner}
                alt="Products"
                className="rounded-2xl shadow-xl max-w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="space-y-20 mt-10">
            <CategorySection />
            <FeaturedProducts />
            <Testimonial />
            <Blogs />
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
}
