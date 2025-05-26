import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif tracking-wider">
              Skyn Globals
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-[#FCA935]">
              Home
            </Link>
            <Link to="/product" className="text-gray-800 hover:text-[#FCA935]">
              Product
            </Link>
            <Link to="/b2b" className="text-gray-800 hover:text-[#FCA935]">
              B2B orders
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-[#FCA935]">
              About
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#FCA935]">
              Contact
            </Link>
          </nav>

          {/* Contact Button */}
          <div>
            <button
              variant="outline" size="md" 
              className="flex items-center space-x-1 px-3 py-1"
              onClick={() => window.location.href = "tel:+919540192363"}
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm">+91-9540192363</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-1 pb-2 space-y-1 sm:px-3">
            <Link to="/" className="block px-2 py-1 text-gray-800">
              Home
            </Link>
            <Link to="/product" className="block px-2 py-1 text-gray-800">
              Product
            </Link>
            <Link to="/b2b" className="block px-2 py-1 text-gray-800">
              B2B orders
            </Link>
            <Link to="/about" className="block px-2 py-1 text-gray-800">
              About
            </Link>
            <Link to="/contact" className="block px-2 py-1 text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
