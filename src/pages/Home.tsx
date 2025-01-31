import React from 'react';
import {Layout} from '../components/Layout';
import { Link } from 'react-router-dom';

import { 
  Users, 
  Home as HomeIcon, 
  GraduationCap, 
  Briefcase, 
  ChevronDown 
} from 'lucide-react';

export function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">समृद्ध गाँव, समृद्ध भारत</span>
              <span className="block text-orange-600 mt-2">Prosperous Villages, Prosperous India</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Empowering rural communities through education, employment, food security, and housing initiatives.
              Join us in building a brighter future for rural India.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/donate" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition md:py-4 md:text-lg md:px-10">
                  Donate Now
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/get-involved" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 transition md:py-4 md:text-lg md:px-10">
                  Volunteer
                </Link>
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
                <HomeIcon className="h-10 w-10 text-orange-600" />
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
                  <Link to="/work/digital-literacy" className="mt-4 inline-flex items-center text-white hover:text-orange-200 transition">
                    Learn More <ChevronDown className="ml-2 h-4 w-4" />
                  </Link>
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
                  <Link to="/work/sustainable-farming" className="mt-4 inline-flex items-center text-white hover:text-orange-200 transition">
                    Learn More <ChevronDown className="ml-2 h-4 w-4" />
                  </Link>
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
    </Layout>
  );
}