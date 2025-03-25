import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
       <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
               <div className="max-w-7xl mx-auto px-4 sm:px-6">
                 <div className="flex justify-between items-center py-4">
                   {/* Logo */}
                   <div className="flex items-center">
                     <h1 className="text-2xl font-serif tracking-wider">Skynx Gllobal</h1>
                   </div>
       
                   {/* Desktop Navigation */}
                   <nav className="hidden md:flex items-center space-x-8">
                     <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                     <a href="#" className="text-gray-800 hover:text-gray-600">News & Media</a>
                     <button className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">
                       Buy Now
                     </button>
                     <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
                     <a href="#" className="text-gray-800 hover:text-gray-600">Blogs</a>
                     <a href="#" className="text-gray-800 hover:text-gray-600">Contact Us</a>
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
                     <a href="#" className="block px-3 py-2 text-gray-800">Home</a>
                     <a href="#" className="block px-3 py-2 text-gray-800">News & Media</a>
                     <a href="#" className="block px-3 py-2 text-gray-800">Buy Now</a>
                     <a href="#" className="block px-3 py-2 text-gray-800">About Us</a>
                     <a href="#" className="block px-3 py-2 text-gray-800">Blogs</a>
                     <a href="#" className="block px-3 py-2 text-gray-800">Contact Us</a>
                   </div>
                 </div>
               )}
             </header>
    )
}