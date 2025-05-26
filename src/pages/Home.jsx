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
      <section className="py-16 md:pt-6 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid py-8 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif">
                Discover the Finest Spices & Premium Makhana
              </h2>
              <p className="text-[#737373] mt-4 max-w-2xl mx-auto text-2xl">
                Welcome to Skyn Globals, your premier destination for the finest spices and premium Makhana.
              </p>
              <br />
              <p className="text-[#737373] max-w-2xl mx-auto text-xl">
                Explore our wide range of spices sourced from the best farms, and indulge in the goodness of our premium Makhana.
              </p>
              <br />
              <Link to="/products">
                <button className="bg-black text-white px-8 py-3 flex items-center space-x-2 hover:bg-[#FCA935] transition">
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
              <br />
              <div className="flex space-x-5">
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
                src={HeroBanner}
                alt="Makhana Product"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
          <CategorySection />
          <FeaturedProducts/>
          <Testimonial/>
          <Blogs />
          <Contact />
        </div>
      </section>
    </>
  );
}
