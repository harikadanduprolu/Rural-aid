import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ChevronRight } from 'lucide-react';

export function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Blog & Updates
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Stories of impact, updates from the field, and rural development insights
            </p>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              className="w-full h-96 object-cover"
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
              alt="Featured blog post"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="relative">
                <div className="flex items-center text-sm text-gray-300 space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>By Priya Patel</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Transforming Rural Education Through Digital Innovation
                </h2>
                <p className="text-gray-300 mb-4">
                  How technology is bridging the educational gap in rural India
                </p>
                <Link
                  to="/blog/digital-education"
                  className="inline-flex items-center text-white hover:text-orange-200 transition"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1592188657297-c6473609e988?auto=format&fit=crop&q=80"
                alt="Blog post"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>March 10, 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainable Farming Practices in Punjab
                </h3>
                <p className="text-gray-600 mb-4">
                  How modern techniques are helping farmers increase yield while conserving water
                </p>
                <Link
                  to="/blog/sustainable-farming"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Post 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80"
                alt="Blog post"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>March 5, 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Women Entrepreneurs Leading Change
                </h3>
                <p className="text-gray-600 mb-4">
                  Success stories from our women empowerment programs
                </p>
                <Link
                  to="/blog/women-entrepreneurs"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Post 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
                alt="Blog post"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-2">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>March 1, 2024</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Building Better Rural Infrastructure
                </h3>
                <p className="text-gray-600 mb-4">
                  How improved roads and facilities are transforming village life
                </p>
                <Link
                  to="/blog/rural-infrastructure"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700"
                >
                  Read More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/blog/category/education"
              className="bg-orange-50 p-4 rounded-lg text-center hover:bg-orange-100 transition"
            >
              <span className="text-gray-900 font-medium">Education</span>
              <span className="block text-sm text-gray-500 mt-1">12 posts</span>
            </Link>
            <Link
              to="/blog/category/agriculture"
              className="bg-orange-50 p-4 rounded-lg text-center hover:bg-orange-100 transition"
            >
              <span className="text-gray-900 font-medium">Agriculture</span>
              <span className="block text-sm text-gray-500 mt-1">8 posts</span>
            </Link>
            <Link
              to="/blog/category/healthcare"
              className="bg-orange-50 p-4 rounded-lg text-center hover:bg-orange-100 transition"
            >
              <span className="text-gray-900 font-medium">Healthcare</span>
              <span className="block text-sm text-gray-500 mt-1">6 posts</span>
            </Link>
            <Link
              to="/blog/category/community"
              className="bg-orange-50 p-4 rounded-lg text-center hover:bg-orange-100 transition"
            >
              <span className="text-gray-900 font-medium">Community</span>
              <span className="block text-sm text-gray-500 mt-1">10 posts</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Subscribe to Our Newsletter</h2>
            <p className="mt-4 text-xl text-orange-100">
              Get the latest updates and stories delivered to your inbox
            </p>
            <form className="mt-8 max-w-xl mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}