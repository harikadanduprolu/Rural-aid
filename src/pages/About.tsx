import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Target, Award } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              About RuralAid
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Dedicated to transforming rural communities through sustainable development and empowerment
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-orange-600" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To empower rural communities by providing access to essential resources and opportunities,
                fostering sustainable development, and building resilient communities that can thrive independently.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-orange-600" />
                <h2 className="ml-3 text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                A future where every rural community in India has access to quality education,
                sustainable livelihoods, and essential infrastructure, enabling them to prosper
                and contribute to India's growth story.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">
              The principles that guide our work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach our work with empathy and understanding, recognizing the dignity
                of every individual we serve.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in the power of collective action and work closely with local
                communities to create lasting change.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Target className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                We focus on creating measurable, sustainable impact that transforms lives
                and communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Meet the people dedicated to rural development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
                alt="Team member"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Priya Patel</h3>
              <p className="text-gray-600">Executive Director</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Team member"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Rahul Singh</h3>
              <p className="text-gray-600">Program Director</p>
            </div>
            <div className="text-center">
              <img
                className="w-32 h-32 mx-auto rounded-full object-cover"
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Team member"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Anjali Sharma</h3>
              <p className="text-gray-600">Community Outreach</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Join Our Mission</h2>
            <p className="mt-4 text-xl text-orange-100">
              Together, we can create lasting change in rural communities
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
  );
}