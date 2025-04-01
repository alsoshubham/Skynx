import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif tracking-wider">
              Skynx Globals
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link to="/product" className="text-gray-800 hover:text-gray-600">
            <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
              Buy Now
            </button>
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">
              About Us
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-gray-600">
              Blogs
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600">
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-800">
              Home
            </Link>
            <Link to="/product" className="block px-3 py-2 text-gray-800">
              Buy Now
            </Link>
            <Link to="/about" className="block px-3 py-2 text-gray-800">
              About Us
            </Link>
            <Link to="/blog" className="block px-3 py-2 text-gray-800">
              Blogs
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-800">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
