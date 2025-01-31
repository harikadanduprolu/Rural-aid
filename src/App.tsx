import React, { useState } from 'react';
import logo from './logo.png';
import { WorkPage } from './pages/Work';
import { 
  Heart, 
  Users, 
  Home, 
  GraduationCap, 
  Briefcase, 
  ChevronDown, 
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center"><img 
                className="h-8 w-auto" 
                src="/logo.png" 
                alt="RuralAid Logo" 
              />
              <span className="ml-2 text-xl font-bold text-gray-900">RuralAid</span>
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
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-orange-600">About</a>
              <a href="#work" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Our Work</a>
              <a href="#involved" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Get Involved</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Blog</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-orange-600">Contact</a>
              <button className="w-full text-left px-3 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 transition">
                Donate Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-orange-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">समृद्ध गाँव, समृद्ध भारत</span>
              <span className="block text-orange-600 mt-3">Prosperous Villages, Prosperous India</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering rural communities through education, employment, food security, and housing initiatives.
              Join us in building a brighter future for rural India.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#donate" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition md:py-4 md:text-lg md:px-10">
                  Donate Now
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#volunteer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition md:py-4 md:text-lg md:px-10">
                  Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-10 w-10 text-orange-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">50,000+</p>
              <p className="mt-1 text-base text-gray-500">Lives Impacted</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Home className="h-10 w-10 text-orange-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">1,000+</p>
              <p className="mt-1 text-base text-gray-500">Homes Built</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <GraduationCap className="h-10 w-10 text-orange-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">200+</p>
              <p className="mt-1 text-base text-gray-500">Schools Supported</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Briefcase className="h-10 w-10 text-orange-600" />
              </div>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">5,000+</p>
              <p className="mt-1 text-base text-gray-500">Jobs Created</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Featured Projects</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Making a real difference in rural communities
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Project 1 */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                className="w-full h-96 object-cover"
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                alt="Women learning computer skills"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="relative">
                  <p className="text-lg font-semibold text-white">
                    Digital Literacy for Rural Women
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Empowering 500+ women with computer skills in Maharashtra
                  </p>
                  <button className="mt-4 inline-flex items-center text-white hover:text-orange-200 transition">
                    Learn More <ChevronDown className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                className="w-full h-96 object-cover"
                src="https://images.unsplash.com/photo-1592188657297-c6473609e988?auto=format&fit=crop&q=80"
                alt="Sustainable farming initiative"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="relative">
                  <p className="text-lg font-semibold text-white">
                    Sustainable Farming Initiative
                  </p>
                  <p className="mt-2 text-sm text-gray-300">
                    Supporting 200 farmers with modern agricultural practices
                  </p>
                  <button className="mt-4 inline-flex items-center text-white hover:text-orange-200 transition">
                    Learn More <ChevronDown className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Voices of Change</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Hear from the communities we serve
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">"Thanks to RuralAid's computer training program, I now teach basic computer skills to children in my village."</p>
              <p className="mt-4 font-semibold">Priya Sharma</p>
              <p className="text-sm text-gray-500">Maharashtra</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">"The sustainable farming program helped me double my crop yield while using less water."</p>
              <p className="mt-4 font-semibold">Rajesh Kumar</p>
              <p className="text-sm text-gray-500">Punjab</p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 italic">"My daughter can now attend school regularly thanks to the new road RuralAid helped build in our village."</p>
              <p className="mt-4 font-semibold">Lakshmi Devi</p>
              <p className="text-sm text-gray-500">Karnataka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-500">
              Get in touch with our team
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-orange-600" />
                  <span className="ml-3 text-gray-700">+91 1800-XXX-XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-orange-600" />
                  <span className="ml-3 text-gray-700">contact@ruralaid.org</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  <span className="ml-3 text-gray-700">123 NGO Street, New Delhi, India</span>
                </div>
              </div>
              <div className="mt-8 flex space-x-6">
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
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

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
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#work" className="text-gray-400 hover:text-white transition">Our Work</a></li>
                <li><a href="#involved" className="text-gray-400 hover:text-white transition">Get Involved</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Education</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Healthcare</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Agriculture</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Women Empowerment</a></li>
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
            <p>&copy; 2024 RuralAid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;