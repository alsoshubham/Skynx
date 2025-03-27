import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-serif mb-4">Skynx Globals</h4>
            <p className="text-gray-400">
              Premium quality fox nuts for your healthy lifestyle.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Terms of Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Categories</h5>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Classic Makhana
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Spicy Makhana
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white">
                  Caramel Makhana
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-start font-semibold mb-4">Location</h5>
            <ul classname="text-start space-y-2">
              <li>
                <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate fugit saepe aliquid rem similique corporis neque
                debitis deserunt repellat tempore omnis, molestiae quisquam non
                placeat iure hic repudiandae mollitia totam.</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className=" text-start font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Skynx Globals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
