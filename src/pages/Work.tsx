import React from 'react';
import { Link } from 'react-router-dom';
import {Layout} from '../components/Layout';
import { ChevronRight, GraduationCap, Heart, Home as HomeIcon, Users } from 'lucide-react';

export function WorkPage() {
  return (
    <Layout>
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Our Work
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transforming rural communities through sustainable development initiatives
            </p>
          </div>
        </div>
      </div>

      {/* Focus Areas */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Focus Areas</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our key areas of intervention
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <GraduationCap className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 mb-4">
                Providing quality education and digital literacy programs to rural children and youth.
              </p>
              <Link
                to="/work/education"
                className="inline-flex items-center text-orange-600 hover:text-orange-700"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <HomeIcon className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Housing</h3>
              <p className="text-gray-600 mb-4">
                Building sustainable and affordable housing solutions for rural families.
              </p>
              <Link
                to="/work/housing"
                className="inline-flex items-center text-orange-600 hover:text-orange-700"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            {/* Healthcare Section - Fixed */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <Heart className="h-12 w-12 text-orange-600 mb-4" />
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
      <p className="text-gray-600 mb-4">
        Improving access to healthcare services and medical facilities.
      </p>
      <Link
        to="/work/healthcare"
        className="inline-flex items-center text-orange-600 hover:text-orange-700"
      >
        Learn More <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 mb-4">
                Strengthening community bonds and local leadership.
              </p>
              <Link
                to="/work/community"
                className="inline-flex items-center text-orange-600 hover:text-orange-700"
              >
                Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Current Projects</h2>
            <p className="mt-4 text-xl text-gray-600">
              Our ongoing initiatives across India
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&q=80"
                alt="Digital literacy project"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Literacy for Rural Women
                </h3>
                <p className="text-gray-600 mb-4">
                  Empowering women in Maharashtra with essential computer skills,
                  enabling them to access digital opportunities and resources.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Maharashtra</span>
                  <Link
                    to="/work/digital-literacy"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700"
                  >
                    View Project <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                className="w-full h-64 object-cover"
                src="https://images.unsplash.com/photo-1592188657297-c6473609e988?auto=format&fit=crop&q=80"
                alt="Sustainable farming project"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Sustainable Farming Initiative
                </h3>
                <p className="text-gray-600 mb-4">
                  Introducing modern agricultural practices and water conservation
                  techniques to farmers in Punjab.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Punjab</span>
                  <Link
                    to="/work/sustainable-farming"
                    className="inline-flex items-center text-orange-600 hover:text-orange-700"
                  >
                    View Project <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Map */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Impact</h2>
            <p className="mt-4 text-xl text-gray-600">
              Where we work across India
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80"
                alt="Map of India"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">10+</p>
                <p className="text-gray-600">States</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">100+</p>
                <p className="text-gray-600">Villages</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-600">50,000+</p>
                <p className="text-gray-600">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Support Our Work</h2>
            <p className="mt-4 text-xl text-orange-100">
              Help us create lasting change in rural communities
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/donate"
                className="bg-white text-orange-600 px-6 py-3 rounded-md font-medium hover:bg-orange-50 transition"
              >
                Donate Now
              </Link>
              <Link
                to="/get-involved"
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}