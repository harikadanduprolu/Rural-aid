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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navigationLinks = [
    { name: 'About', to: '/about' },
    { name: 'Our Work', to: '/work' },
    { name: 'Get Involved', to: '/get-involved' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact', to: '/contact' },
  ];

  const programLinks = [
    { name: 'Education', to: '/work/education' },
    { name: 'Healthcare', to: '/work/healthcare' },
    { name: 'Agriculture', to: '/work/agriculture' },
    { name: 'Women Empowerment', to: '/work/women-empowerment' },
  ];

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com' },
    { icon: Twitter, url: 'https://twitter.com' },
    { icon: Instagram, url: 'https://instagram.com' },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link 
                to="/" 
                className="flex items-center focus:outline-none focus:ring-2 focus:ring-orange-600 rounded"
                aria-label="Home"
              >
                <Heart className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">RuralAid</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-2 text-gray-700 hover:text-orange-600 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/donate" 
                className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-800"
              >
                Donate Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/donate" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 transition-colors duration-200"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-orange-600" />
                <span className="ml-2 text-xl font-bold">RuralAid</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering rural communities across India
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Programs</h2>
              <ul className="space-y-2">
                {programLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
              <p className="text-gray-400 mb-4">Stay updated with our latest news</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  aria-label="Email for newsletter subscription"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-800"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <div className="flex justify-center space-x-6 mb-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-600 transition-colors duration-200"
                  aria-label={`Visit our ${social.icon.displayName} page`}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p>&copy; 2024 RuralAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}