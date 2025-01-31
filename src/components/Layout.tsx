import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Heart className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">RuralAid</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
              <Link to="/work" className="text-gray-700 hover:text-orange-600">Our Work</Link>
              <Link to="/get-involved" className="text-gray-700 hover:text-orange-600">Get Involved</Link>
              <Link to="/blog" className="text-gray-700 hover:text-orange-600">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-600">Contact</Link>
              <Link to="/donate" className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition">
                Donate Now
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</Link>
              <Link to="/work" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Our Work</Link>
              <Link to="/get-involved" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Get Involved</Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Blog</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</Link>
              <Link to="/donate" className="block px-3 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 transition">
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold">RuralAid</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering rural communities across India
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                <li><Link to="/work" className="text-gray-400 hover:text-white transition">Our Work</Link></li>
                <li><Link to="/get-involved" className="text-gray-400 hover:text-white transition">Get Involved</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link to="/work/education" className="text-gray-400 hover:text-white transition">Education</Link></li>
                <li><Link to="/work/healthcare" className="text-gray-400 hover:text-white transition">Healthcare</Link></li>
                <li><Link to="/work/agriculture" className="text-gray-400 hover:text-white transition">Agriculture</Link></li>
                <li><Link to="/work/women-empowerment" className="text-gray-400 hover:text-white transition">Women Empowerment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p>&copy; 2024 RuralAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}