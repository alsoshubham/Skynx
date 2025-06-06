import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Remove default container margins and use max-w-7xl for better alignment
    <footer className="py-8 bg-white text-black">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <h3
              className="font-medium text-4xl text-start font-serif"
              aria-label="Skyn Globals Logo"
            >
              Skyn Globals
            </h3>
            <p className="text-black text-start leading-relaxed">
              Premium quality spices and fox nutes sourced directly from Indian
              farms and processed with state-of-the-art technology to preserve
              authentic flavors.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-start text-2xl font-serif">Quick Links</h4>
            <ul className="space-y-3 text-start">
              <li>
                <Link
                  to="/policies/privacy-policy"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/policies/shipping-policy"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/policies/refund-policy"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/policies/terms-of-services"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link
                  to="/certification"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Certification
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-medium text-start text-2xl font-serif">Categories</h4>
            <ul className="space-y-3 text-start">
              <li>
                <Link
                  to="/product?category=Whole+Spices"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Whole Spices
                </Link>
              </li>
              <li>
                <Link
                  to="/product?category=Ground+Spices"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Ground Spices
                </Link>
              </li>
              <li>
                <Link
                  to="/product?category=Retail+Packs"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Retail Packs
                </Link>
              </li>
              <li>
                <Link
                  to="/product?category=Makhana"
                  className="text-black hover:text-[#fca935] transition-colors"
                >
                  Makhana
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Social */}
          <div>
            <h5 className="font-medium text-2xl text-start font-serif">Location</h5>
            <p className="text-black text-start leading-relaxed">
              H.No. 8 1st Flr, Pvt 101, 102, Blk-C, Ranjeet Nagar, Patel Nagar
              West, New Delhi, Central Delhi- 110008
            </p>
            <h5 className="font-medium text-2xl text-start font-serif mt-6 mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Link to="#" className="text-black hover:text-[#fca935]">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="text-black hover:text-[#fca935]">
                <FaTwitter size={24} />
              </Link>
              <Link to="#" className="text-black hover:text-[#fca935]">
                <FaInstagram size={24} />
              </Link>
              <a
                href="https://medium.com/@skynxglobalsindia"
                className="text-black hover:text-[#fca935]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiMedium size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-[#a05a13]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-black text-sm">
              © {currentYear}{" "}
              <span className="font-semibold">Skyn Globals</span>. All rights
              reserved.
            </p>
            <p className="text-sm">
              Designed and Developed by{" "}
              <a
                href="https://www.linkedin.com/in/alsoshubham"
                className="text-black hover:text-[#fca935] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                alsoshubham
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
